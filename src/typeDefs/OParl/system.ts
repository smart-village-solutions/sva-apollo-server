import { gql } from 'apollo-server-core';
import { oParlBase } from './oParlBase';

export const systemGQL = gql`
  extend type Query {
    oParlSystems(
      externalIds: [String!]
      keyword: [String!]
      offset: Int
      pageSize: Int
    ): [OParlSystem!]
  }

  type OParlSystem {
    body(offset: Int, pageSize: Int): [OParlBody!]
    oparlVersion: String!
    contactEmail: String
    contactName: String
    name: String
    otherOparlVersions: [String!]
    product: String
    vendor: String
    website: String
    ${oParlBase}
  }
`;
