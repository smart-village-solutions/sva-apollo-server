import { gql } from 'apollo-server-core';

export const personGQL = gql`
  extend type Query {
    oParlPersons: [OParlPerson!]
  }

  type OParlPerson {
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
  }
`;
