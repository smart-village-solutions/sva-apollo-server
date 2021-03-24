import { gql } from 'apollo-server-core';

export const legislativeTermGQL = gql`
  extend type Query {
    oParlLegislativeTerms: [OParlLegislativeTerm!]
  }

  type OParlLegislativeTerm {
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
    body: OParlBody
    endDate: Date
    name: String
    startDate: Date
  }
`;
