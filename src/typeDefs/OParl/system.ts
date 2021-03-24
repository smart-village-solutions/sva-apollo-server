import { gql } from 'apollo-server-core';

export const systemGQL = gql`
  extend type Query {
    oParlSystems: [OParlSystem!]
  }

  type OParlSystem {
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
    body: [OParlBody!]
    oparlVersion: String!
    contactEmail: String
    contactName: String
    license: String
    name: String
    otherOparlVersions: [String!]
    product: String
    vendor: String
    website: String
  }
`;
