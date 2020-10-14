import { getRandomInt } from "./Random"

describe('getRandomInt', () => {
    it('should return an Integer between 0 and max', () => {
        for (let i = 1; i <= 10; i++) {
            const randomInt: number = getRandomInt(i);
            expect(randomInt).toBeGreaterThanOrEqual(0);
            expect(randomInt).toBeLessThan(i);
        }
    })
})