import { Roadwork } from '../models';
import { Bucket } from '../models/Buckets';
import { ConstructionSite } from '../models/ConstructionSite';
import { Bi, Cycle, List, Self } from '../models/Cycle';
import { dateScalar } from './date';
import { findBody, updateBody } from './OParl/body';
import {
  createRoadwork,
  deleteRoadwork,
  findRoadwork,
  updateRoadwork,
} from './roadwork';

const func = async () => {
  const cycle = await Cycle.findOne();

  // console.log(rest?.[3]?.fieldNodes?.[0]?.selectionSet?.selections);
  // console.log(cycle?.toJSON());

  return cycle;
};

const func2 = async () => {
  const res = await List.findOne();
  // console.log(res?.toJSON());
  return res;
};
export const resolvers = {
  Date: dateScalar,
  Query: {
    constructionSites: () => ConstructionSite.find(),
    roadworks: findRoadwork,
    oParlBodies: findBody,
    getCycle: func,
    getList: func2,
    cycles: () => Cycle.find(),
    selfQ: () => Self.findOne(),
    getBi: (_, { value = true }) => Bi.findOne({ value }),
    getBucket: (_, { myId }) => Bucket.findOne({ myId }),
  },
  Bi: {
    value: (args) => {
      // console.log({ valueArgs: args });
      return args.value;
    },
    bi: (args) => {
      console.log(args);
      return Bi.findOne({ value: !args.value });
    },
  },
  Bucket: {
    myId: (args) => args.myId,
    roadworks: (args) =>
      args.roadworks.map((value) => Roadwork.findOne({ name: value })),
    buckets: (args) =>
      args.buckets.map((value) => Bucket.findOne({ myId: value })),
  },
  Self: {
    self: (...args) => {
      console.log(args);
      return Self.findOne();
    },
  },
  Mutation: {
    createConstructionSite: async (
      _,
      {
        category,
        cause,
        description,
        direction,
        endDate,
        imageUri,
        lat,
        lon,
        locationDescription,
        restrictions,
        startDate,
        title,
      },
    ) => {
      const constructionSite = new ConstructionSite({
        category,
        cause,
        description,
        direction,
        endDate,
        imageUri,
        location: { lat, lon },
        locationDescription,
        restrictions,
        startDate,
        title,
      });
      await constructionSite.save();
      return constructionSite;
    },
    createRoadwork,
    deleteRoadwork,
    updateRoadwork,
    updateBody,
    createCycle: async () => {
      await Cycle.deleteMany();
      const cycle1 = new Cycle({ value: true, next: false });
      await cycle1.save();

      const cycle2 = new Cycle({ value: false, next: true });
      await cycle2.save();

      return cycle1;
    },
    createList: async () => {
      await List.deleteMany();

      const list1 = new List({
        value: 'true',
        // next: [{ value: '1' }, { value: '2' }],
        next: ['1', '2'],
      });
      await list1.save();

      const list2 = new List({
        value: '1',
        // next: [{ value: '2' }],
        next: ['2'],
      });
      await list2.save();

      const list3 = new List({
        value: '2',
        // next: [{ value: 'true' }],
        next: 'true',
      });
      await list3.save();

      return list1;
    },
    createSelf: async () => {
      await Self.deleteMany();

      return await new Self({ value: true }).save();
    },
    createBi: async () => {
      await Bi.deleteMany();
      const bi1 = new Bi({ value: true });
      await bi1.save();

      const bi2 = new Bi({ value: false });
      await bi2.save();

      return bi1;
    },
    createBucket: async () => {
      await Bucket.deleteMany();
      const b1 = new Bucket({
        myId: 'first',
        roadworks: ['mega', 'alfred'],
        buckets: ['first', 'second'],
      });
      await b1.save();

      const b2 = new Bucket({
        myId: 'second',
        roadworks: ['alfred'],
        buckets: ['first'],
      });
      await b2.save();

      return b1;
    },
  },
};
