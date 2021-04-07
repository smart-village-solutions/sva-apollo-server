import { gql } from 'apollo-server-core';
import { oParlBase } from './oParlBase';

export const systemGQL = gql`
  extend type Query {
    oParlSystems: [OParlSystem!]
  }

  type OParlSystem {
    body: [OParlBody!]
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
