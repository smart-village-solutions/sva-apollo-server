import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const personGQL = gql`
  extend type Query {
    oParlPersons: [OParlPerson!]
  }

  type OParlPerson {
    affix: [String!]
    body: OParlBody
    email: [String!]
    familyName: String
    formOfAddress: String
    gender: String
    givenName: String
    life: String
    lifeSource: String
    location: OParlLocation
    membership: [OParlMembership!]
    name: String
    phone: [String!]
    status: [String!]
    title: [String!]
    ${oParlBase}
  }
`;
