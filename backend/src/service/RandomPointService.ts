import { Point } from "../model/Point";

/**
 * Returns a list of random Points. The list has the specified amount of elements.
 * 
 * @param amount Number of elements in resulting list
 */
export function getRandomPoints(amount: number): Array<Point> {
  const result: Array<Point> = [];
  for (let i = 0; i < amount; i++) {
    const randomPoint: Point = getRandomPoint();
    result.push(randomPoint);
  }
  return result;
}

/**
 * Returns a new Point with random coordinates. The coordinates are between 0 and 1.
 */
function getRandomPoint(): Point {
  const randomXCoordinate: number = Math.random();
  const randomYCoordinate: number = Math.random();
  return new Point(randomXCoordinate, randomYCoordinate);
}
