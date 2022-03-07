/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */
import { Utils } from './module';

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

  /**
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

  /**
   * @method documentedMethod
   * Calculates the number. This comment somehow disapeared.
   * @param n infer type from ts
   * @return The important number
   */
  documentedMethod(n: number): number;

  undocumentedMethod(): string;
}

export { Utils };
