import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const locationGQL = gql`
  extend type Query {
    oParlLocations(externalIds: [String!]): [OParlLocation!]
  }

  type OParlLocation {
    bodies(offset: Int, pageSize: Int): [OParlBody!]
    description: String
    geojson: String
    locality: String
    meeting(offset: Int, pageSize: Int): [OParlMeeting!]
    organization(offset: Int, pageSize: Int): [OParlOrganization!]
    papers(offset: Int, pageSize: Int): [OParlPaper!]
    persons(offset: Int, pageSize: Int): [OParlPerson!]
    postalCode: String
    room: String
    streetAddress: String
    subLocality: String
    ${oParlBase}
  }
`;
