import { constructionSites, createConstructionSite } from './constructionSite';
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
    constructionSites,
    roadworks: findRoadwork,
    oParlBodies: findBody,
  },
  Mutation: {
    createConstructionSite,
    createRoadwork,
    deleteRoadwork,
    updateRoadwork,
    updateBody,
  },
};
