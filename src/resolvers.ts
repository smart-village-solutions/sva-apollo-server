import { ConstructionSite } from './models/ConstructionSite';
import {
  createRoadwork,
  deleteRoadwork,
  findRoadwork,
  updateRoadwork,
} from './models/Roadwork';

export const resolvers = {
  Query: {
    constructionSites: () => ConstructionSite.find(),
    roadworks: findRoadwork,
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
  },
};
