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
  // --> #3 bad naming (parsing ?) in the documentation + is not part of "Instance Members"
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

  // --> #2 the method description disapeared, is it an expected behavior ?

  /**
   * @method documentedMethod
   * Calculates the number. This comment somehow disapeared.
   * @param n infer type from ts
   * @return The important number
   */
  documentedMethod(n: number): number {
    return 2 * n;
  }

  undocumentedMethod(): string {
    return 'I do exist';
  }
}

export class ExportedButUndocumented {
  /**
   * Some value
   */
  documentedValue: number;

  undocumentedValue: number;

  /**
   * Calculates the number
   * @param n infer type from ts
   * @return The important number
   */
  documentedMethod(n: number): number {
    return 2 * n;
  }

  undocumentedMethod(): string {
    return 'I do exist';
  }
}

// --> #5 class methods are ignored in the generated documentation
export { Utils };
