/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */
import { Utils } from './module';

// --> #2 the interface description disapeared, is it an expected behavior ?
// --> #5 documentation for interfaces is missing

/**
 * @public
 * @typedef I
 * This comment should appear in the generated doc.
 */
interface I {
  // this should be documented
  value: string;
}

declare class Test {
  /**
   * @method Test.documentedGetterWithTag
   * Test.
   * @return {number}
   */
  documentedGetterWithTag: (index: number) => number;

  /**
   * Test.
   */
  documentedGetterWithoutTag: (index: number) => number;

  undocumentedGetter: (index: number) => number;
}

/**
 * Some module, nothing serious
 * @public
 */
export class ExportedAndDocumented {
  // --> #3 bad naming (parsing ?) in the documentation
  // --> #4 click is not part of "Instance Members" while click2 is

  /**
   * @event click
   * Event triggered when the user presses and releases a mouse button
   */
  click: MouseEvent;

  /**
   * Event triggered when the user presses and releases a mouse button
   */
  click2: MouseEvent;

  /**
   * Some value
   */
  documentedValue: number;

  undocumentedValue: number;

  // --> #1 both methods are ignored even with --document-exported flag on
  // --> #2 the method description disapeared, is it an expected behavior ?

  /**
   * @method documentedMethod
   * Calculates the number
   * @param n infer type from ts
   * @return The important number
   */
  documentedMethod(n: number): number;

  undocumentedMethod(): string;
}

export class ExportedButUndocumented {
  /**
   * Some value
   */
  documentedValue: number;

  undocumentedValue: number;

  // --> #1 both methods are ignored even with --document-exported flag on
  // --> #2 the method description disapeared, is it an expected behavior ?

  /**
   * @method documentedMethod
   * Calculates the number. This comment somehow disapeared.
   * @param n infer type from ts
   * @return The important number
   */
  documentedMethod(n: number): number;

  undocumentedMethod(): string;
}

export { Utils, I, Test };
