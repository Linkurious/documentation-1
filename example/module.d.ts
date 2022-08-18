/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

type Vector2 = [number, number];

export class Utils {
  /**
   * Add two vectors
   * @param u vector u
   * @param v vector v
   * @returns u + v
   */
  add(u: Vector2, v: Vector2): Vector2;

  /**
   * Dot product of two vectors
   * @param u vector u
   * @param v vector v
   * @returns u . v
   */
  dot(u: Vector2, v: Vector2): number;
}
