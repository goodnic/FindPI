/**
 * Returns a random Integer between 0 and the specified max.
 * 
 * @param max Highest value
 */
export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}
