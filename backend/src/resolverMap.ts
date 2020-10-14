import { IResolvers } from 'graphql-tools';
import { Point } from './model/Point';
import { getRandomPoints } from './service/RandomPointService';

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return 'Hello World!';
        },
        getRandomPoints(
            _: void,
            args: {
                amount: number,
            },
        ): Array<Point> {
            return getRandomPoints(args.amount);
        }
    },
};

export default resolverMap;
