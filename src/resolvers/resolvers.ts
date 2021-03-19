import { ConstructionSite } from '../models/ConstructionSite';
import { dateScalar } from './date';
import { findBody, updateBody } from './OParl/body';
import {
  createRoadwork,
  deleteRoadwork,
  findRoadwork,
  updateRoadwork,
} from './roadwork';

export const resolvers = {
  Date: dateScalar,
  Query: {
    constructionSites: () => ConstructionSite.find(),
    roadworks: findRoadwork,
    oParlBodies: findBody,
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
  },
};
