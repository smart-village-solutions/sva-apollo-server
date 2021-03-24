import { gql } from 'apollo-server-core';

export const membershipGQL = gql`
  extend type Query {
    oParlMemberships: [OParlMembership!]
  }

  type OParlMembership {
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
    endDate: Date
    onBehalfOf: OParlOrganization
    organization: OParlOrganization
    person: OParlPerson
    role: String
    startDate: Date
    votingRight: Boolean
  }
`;
