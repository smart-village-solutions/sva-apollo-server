import { ConstructionSite } from '../models/ConstructionSite';
import { Cycle, List } from '../models/Cycle';
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
  },
};
