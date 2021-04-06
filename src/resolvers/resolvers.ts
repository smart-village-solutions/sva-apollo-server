import { merge } from 'lodash';

import { constructionSites, createConstructionSite } from './constructionSite';
import { dateScalar } from './date';
import {
  agendaItemResolvers,
  bodyResolvers,
  consultationResolvers,
  fileResolvers,
  legislativeTermResolvers,
  locationResolvers,
  meetingResolvers,
  membershipResolvers,
  organizationResolvers,
  paperResolvers,
  personResolvers,
  systemResolvers,
} from './OParl';
import {
  createRoadwork,
  deleteRoadwork,
  findRoadwork,
  updateRoadwork,
} from './roadwork';

// TODO: extract the remaining resolvers
const baseResolvers = {
  Date: dateScalar,
  Query: {
    constructionSites,
    roadworks: findRoadwork,
  },
  Mutation: {
    createConstructionSite,
    createRoadwork,
    deleteRoadwork,
    updateRoadwork,
  },
};

export const resolvers = merge(
  {},
  agendaItemResolvers,
  baseResolvers,
  bodyResolvers,
  consultationResolvers,
  fileResolvers,
  legislativeTermResolvers,
  locationResolvers,
  meetingResolvers,
  membershipResolvers,
  organizationResolvers,
  paperResolvers,
  personResolvers,
  systemResolvers,
);
