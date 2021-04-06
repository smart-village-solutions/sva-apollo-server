import { gql } from 'apollo-server-core';

export const organizationGQL = gql`
  extend type Query {
    oParlOrganizations: [OParlOrganization!]
  }

  type OParlOrganization {
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
    classification: String
    endDate: Date
    externalBody: String
    location: OParlLocation
    meeting: [OParlMeeting!]
    membership: [OParlMembership!]
    name: String
    organizationType: String
    post: [String!]
    shortName: String
    startDate: Date
    subOrganizationOf: OParlOrganization
    website: String
  }
`;
