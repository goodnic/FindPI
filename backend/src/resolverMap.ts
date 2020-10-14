import { IResolvers } from "graphql-tools";
import { Point } from "./model/Point";
import { getRandomPoints } from "./service/RandomPointService";

const resolverMap: IResolvers = {
  Query: {
    getRandomPoints(
      _: void,
      args: {
        amount: number;
      }
    ): Array<Point> {
      return getRandomPoints(args.amount);
    },
  },
};

export default resolverMap;
