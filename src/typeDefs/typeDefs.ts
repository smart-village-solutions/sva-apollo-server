import { gql } from 'apollo-server-core';
import { constructionSiteGQL } from './constructionSite';
import { dateGQL } from './date';
import { locationGQL } from './location';
import {
  agendaItemGQL,
  bodyGQL,
  consultationGQL,
  fileGQL,
  legislativeTermGQL,
  locationGQL as oParlLocationGQL,
  meetingGQL,
  membershipGQL,
  organizationGQL,
  paperGQL,
  personGQL,
  systemGQL,
} from './OParl';
import { roadworkGQL } from './roadwork';

const _baseGQL = gql`
  type Query {
    roadworks: [Roadwork!]!
  }

  type Mutation {
    createRoadwork(name: String!, description: String): Roadwork!
    deleteRoadwork(id: ID!): Roadwork!
    updateRoadwork(id: ID!, name: String, description: String): Roadwork!
  }
`;

export const typeDefs = [
  _baseGQL, // query and mutation need to be first, because their types are extended by others
  agendaItemGQL,
  bodyGQL,
  constructionSiteGQL,
  consultationGQL,
  dateGQL,
  fileGQL,
  legislativeTermGQL,
  oParlLocationGQL,
  meetingGQL,
  membershipGQL,
  locationGQL,
  organizationGQL,
  paperGQL,
  personGQL,
  roadworkGQL,
  systemGQL,
];
