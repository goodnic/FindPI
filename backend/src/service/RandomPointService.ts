import { Point } from "../model/Point";

export function getRandomPoints(amount: number): Array<Point> {
    const result: Array<Point> = [];
    for (let i = 0; i < amount; i++) {
        const randomPoint: Point = getRandomPoint();
        result.push(randomPoint);
    }
    return result;
}

function getRandomPoint(): Point {
    const randomXCoordinate: number = Math.random();
    const randomYCoordinate: number = Math.random();
    return new Point(randomXCoordinate, randomYCoordinate);
}
