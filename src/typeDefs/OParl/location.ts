import { gql } from 'apollo-server-core';

export const locationGQL = gql`
  extend type Query {
    oParlLocations: [OParlLocation!]
  }

  type OParlLocation {
    id: ID!
    "id from the oparl object = url where the json is located"
    externalId: String!
    "oParl type = url where the type is specified"
    type: String!
    created: Date
    modified: Date
    keyword: [String!]
    web: String
    deleted: Boolean
    bodies: [OParlBody!]
    description: String
    geojson: String
    locality: String
    meeting: [OParlMeeting!]
    organization: [OParlOrganization!]
    papers: [OParlPaper!]
    postalCode: String
    room: String
    streetAddress: String
    subLocality: String
  }
`;
