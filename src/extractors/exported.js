import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import nodePath from 'path';
import fs from 'fs';
import { createRequire } from 'module';
import { parseToAst } from '../parsers/parse_to_ast.js';
import findTarget from '../infer/finders.js';
import isJSDocComment from '../is_jsdoc_comment.js';

const require = createRequire(import.meta.url);
const traverse = babelTraverse.default || babelTraverse;

/**
 * Iterate through the abstract syntax tree, finding ES6-style exports,
 * and inserting blank comments into documentation.js's processing stream.
 * Through inference steps, these comments gain more information and are automatically
 * documented as well as we can.
 * @param {Object} ast the babel-parsed syntax tree
 * @param {Object} data the name of the file
 * @param {Function} addComment a method that creates a new comment if necessary
 * @returns {Array<Object>} comments
 * @private
 */
export default function walkExported(
  ast,
  data /*: {
  file: string
} */,
  addComment
) {
  const newResults = [];
  const filename = data.file;
  const dataCache = new Map();

  function addBlankComment(data, path, node) {
    return addComment(data, '', node.loc, path, node.loc, true);
  }

  function getComments(data, path) {
    const comments = (path.node.leadingComments || []).filter(isJSDocComment);

    if (!comments.length) {
      // If this is the first declarator we check for comments on the VariableDeclaration.
      if (
        t.isVariableDeclarator(path) &&
        path.parentPath.get('declarations')[0] === path
      ) {
        return getComments(data, path.parentPath);
      }

      const added = addBlankComment(data, path, path.node);
      return added ? [added] : [];
    }

    return comments
      .map(function (comment) {
        return addComment(
          data,
          comment.value,
          comment.loc,
          path,
          path.node.loc,
          true
        );
      })
      .filter(Boolean);
  }

  function addComments(data, path, overrideName, overrideMemberOf) {
    const comments = getComments(data, path);
    if (overrideName) {
      comments.forEach(function (comment) {
        comment.name = overrideName;
      });
    }
    if (overrideMemberOf) {
      comments.forEach(function (comment) {
        comment.memberof = overrideMemberOf;
      });
    }
    newResults.push.apply(newResults, comments);
  }

  traverse(ast, {
    ExportDeclaration(path) {
      const declaration = path.get('declaration');
      if (t.isDeclaration(declaration)) {
        traverseExportedSubtree(declaration, data, addComments);
        return path.skip();
      }

      if (path.isExportDefaultDeclaration()) {
        if (declaration.isIdentifier()) {
          // Find the binding path, scanning scope from bottom to top
          const bindingPath = getBinding(
            declaration.scope,
            declaration.node.name
          );
          // If no binding path is found, print an error & skip this path
          if (!bindingPath) {
            console.error(new Error(`Unreachable : ${declaration.node.name}`));
            return path.skip();
          }
          traverseExportedSubtree(bindingPath, data, addComments);
          return path.skip();
        }

        traverseExportedSubtree(declaration, data, addComments);
        return path.skip();
      }

      if (t.isExportNamedDeclaration(path)) {
        const specifiers = path.get('specifiers');
        const { source } = path.node;
        const { exportKind } = path.node;
        specifiers.forEach(specifier => {
          let specData = data;
          let local;
          if (t.isExportDefaultSpecifier(specifier)) {
            local = 'default';
          } else {
            // ExportSpecifier
            local = specifier.node.local.name;
          }
          const exported = specifier.node.exported.name;

          let bindingPath;
          if (source) {
            const tmp = findExportDeclaration(
              dataCache,
              local,
              exportKind,
              filename,
              source.value
            );
            bindingPath = tmp.ast;
            specData = tmp.data;
          } else {
            // Find the binding path, scanning scope from bottom to top
            bindingPath = getBinding(path.scope, local);
            // If no binding path is found, print an error & skip this path
            if (!bindingPath) {
              console.error(new Error(`Unreachable : ${local}`));
              return path.skip();
            }
          }

          if (bindingPath === undefined) {
            console.error(
              new Error(
                `Unable to find the value ${exported} in ${specData.file}`
              )
            );
            return path.skip();
          }
          traverseExportedSubtree(bindingPath, specData, addComments, exported);
        });
        return path.skip();
      }
    }
  });

  return newResults;
}

function traverseExportedSubtree(
  path,
  data,
  addComments,
  overrideName,
  overrideMemberOf
) {
  let attachCommentPath = path;
  if (path.parentPath && path.parentPath.isExportDeclaration()) {
    attachCommentPath = path.parentPath;
  }
  // Avoid duplicates if memberof is overridden
  if (!overrideMemberOf) addComments(data, attachCommentPath, overrideName);

  let target = findTarget(path);
  if (!target) {
    return;
  }

  if (t.isVariableDeclarator(target) && target.has('init')) {
    target = target.get('init');
  }

  if (t.isTSInterfaceDeclaration(target)) {
    addComments(data, path, undefined, overrideMemberOf);

    // Heritage needs documentation too
    if (target.node.extends) {
      target.node.extends
        .map(({ expression }) => expression.name)
        .forEach(name => {
          const binding = getBinding(path.scope, name);
          traverseExportedSubtree(
            binding,
            data,
            addComments,
            overrideName,
            overrideMemberOf
          );
        });
    }
  }

  if (target.isClass() || target.isObjectExpression()) {
    const classScope = path.scope;
    // Handle mixins if a declaration is found in the target scope
    const declaration = findDeclaration(
      classScope,
      target.node.id.name,
      'TSInterfaceDeclaration'
    );
    if (declaration)
      declaration.node.extends
        .map(({ expression }) => getBinding(classScope, expression.name))
        .filter(binding => binding)
        .forEach(binding => {
          traverseExportedSubtree(
            binding,
            data,
            addComments,
            overrideName,
            target.node.id.name
          );
        });
    target.traverse({
      Property(path) {
        addComments(data, path);
        // If leading comment has @inner tag
        if (
          path.node.leadingComments &&
          path.node.leadingComments
            .map(({ value }) => value.match(/^ *\*\*? ?@inner/))
            .filter(matching => matching).length > 0
        ) {
          // Then, document the property type
          const typeName =
            path.node.typeAnnotation?.typeAnnotation?.typeName?.name;
          if (typeName)
            traverseExportedSubtree(
              getBinding(classScope, typeName),
              data,
              addComments,
              overrideName,
              overrideMemberOf
            );
        }
        path.skip();
      },
      Method(path) {
        // Don't explicitly document constructor methods: their
        // parameters are output as part of the class itself.
        if (path.node.kind !== 'constructor') {
          addComments(data, path, undefined, overrideMemberOf);
        }
        path.skip();
      },
      TSDeclareMethod(path) {
        // Let's document all the types that this method is using.
        path.traverse({
          TSTypeReference(refPath) {
            const binding = getBinding(classScope, refPath.node.typeName.name);
            // Add comments only if binding is found in the class scope.
            if (binding)
              addComments(data, binding, undefined, overrideMemberOf);
          }
        });
        // Don't explicitly document constructor methods: their
        // parameters are output as part of the class itself.
        if (path.node.kind !== 'constructor') {
          addComments(data, path, undefined, overrideMemberOf);
        }
        path.skip();
      }
    });
  }
}

function getCachedData(dataCache, filePath) {
  let path = filePath;
  if (!nodePath.extname(path)) {
    path = require.resolve(path);
  }

  let value = dataCache.get(path);
  if (!value) {
    const input = fs.readFileSync(path, 'utf-8');
    const ast = parseToAst(input, filePath);
    value = {
      data: {
        file: path,
        source: input
      },
      ast
    };
    dataCache.set(path, value);
  }
  return value;
}

// Loads a module and finds the exported declaration.
function findExportDeclaration(
  dataCache,
  name,
  exportKind,
  referrer,
  filename
) {
  const depPath = nodePath.resolve(nodePath.dirname(referrer), filename);
  const tmp = getCachedData(dataCache, depPath);
  const { ast } = tmp;
  let { data } = tmp;

  let rv;
  traverse(ast, {
    Statement(path) {
      path.skip();
    },
    ExportDeclaration(path) {
      if (name === 'default' && path.isExportDefaultDeclaration()) {
        rv = path.get('declaration');
        path.stop();
      } else if (path.isExportNamedDeclaration()) {
        const declaration = path.get('declaration');
        if (t.isDeclaration(declaration)) {
          let bindingName;
          if (
            declaration.isFunctionDeclaration() ||
            declaration.isClassDeclaration() ||
            declaration.isTypeAlias() ||
            declaration.isOpaqueType()
          ) {
            bindingName = declaration.node.id.name;
          } else if (declaration.isVariableDeclaration()) {
            // TODO: Multiple declarations.
            bindingName = declaration.node.declarations[0].id.name;
          }
          if (name === bindingName) {
            rv = declaration;
            path.stop();
          } else {
            path.skip();
          }
          return;
        }

        // export {x as y}
        // export {x as y} from './file.js'
        const specifiers = path.get('specifiers');
        const { source } = path.node;
        for (let i = 0; i < specifiers.length; i++) {
          const specifier = specifiers[i];
          let local;
          let exported;
          if (t.isExportDefaultSpecifier(specifier)) {
            // export x from ...
            local = 'default';
            exported = specifier.node.exported.name;
          } else {
            // ExportSpecifier
            local = specifier.node.local.name;
            exported = specifier.node.exported.name;
          }
          if (exported === name) {
            if (source) {
              // export {local as exported} from './file.js';
              const tmp = findExportDeclaration(
                dataCache,
                local,
                exportKind,
                depPath,
                source.value
              );
              rv = tmp.ast;
              data = tmp.data;
              if (!rv) {
                throw new Error(`${name} is not exported by ${depPath}`);
              }
            } else {
              // export {local as exported}
              if (exportKind === 'value') {
                rv = path.scope.getBinding(local).path;
              } else {
                rv = findLocalType(path.scope, local);
              }
              if (!rv) {
                throw new Error(`${depPath} has no binding for ${name}`);
              }
            }
            path.stop();
            return;
          }
        }
      }
    }
  });

  return {
    ast: rv,
    data
  };
}

/**
 * Find binding (https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#bindings)
 * by scanning scope from bottom to top. If that's the case, walk the current scope looking
 * for a top-level type alias or any other kind of node path.
 */
function getBinding(scope, local) {
  return (
    scope.getBinding(local)?.path ||
    findLocalType(scope, local) ||
    findDeclaration(scope, local)
  );
}

// Since we cannot use scope.getBinding for types this walks the scopes looking for a
// top-level type alias.
function findLocalType(scope, local) {
  let rv;
  let scopePath = scope.path;
  while (!rv && scopePath) {
    scopePath.traverse({
      Statement(path) {
        path.skip();
      },
      TypeAlias(path) {
        if (path.node.id.name === local) {
          rv = path;
          path.stop();
        } else {
          path.skip();
        }
      }
    });
    scopePath = scopePath.parentPath;
  }
  return rv;
}

/**
 * Find a declaration node path based on its name and type in a specific scope.
 * @param scope searching scope
 * @param local declaration local name in this scope
 * @param type declaration optional type
 * @returns
 */
function findDeclaration(scope, local, type = '*') {
  let rv;
  let scopePath = scope.path;
  while (!rv && scopePath) {
    scopePath.traverse({
      Declaration(path) {
        if (
          (type === '*' || path.node.type === type) &&
          path.node.id?.name === local
        ) {
          rv = path;
          path.stop();
        } else {
          path.skip();
        }
      }
    });
    scopePath = scopePath.parentPath;
  }
  return rv;
}
