import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const locationGQL = gql`
  extend type Query {
    oParlLocations: [OParlLocation!]
  }

  type OParlLocation {
    bodies: [OParlBody!]
    description: String
    geojson: String
    locality: String
    meeting: [OParlMeeting!]
    organization: [OParlOrganization!]
    papers: [OParlPaper!]
    persons: [OParlPerson!]
    postalCode: String
    room: String
    streetAddress: String
    subLocality: String
    ${oParlBase}
  }
`;
