import { Point } from "../model/Point";
import { getRandomInt } from "../util/Random";
import { getRandomPoints } from "./RandomPointService";

describe('getRandomPoints', () => {
    it('should return N random points', () => {
        const randomAmountOfTries: number = getRandomInt(100);
        for (let i = 0; i < randomAmountOfTries; i++) {
            const randomNumberOfElements: number = getRandomInt(100000);
            const randomPoints: Array<Point> = getRandomPoints(randomNumberOfElements);
            expect(randomPoints.length).toEqual(randomNumberOfElements);
        }
    })
});
