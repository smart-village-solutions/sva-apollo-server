import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const organizationGQL = gql`
  extend type Query {
    oParlOrganizations(
      externalIds: [String!]
      keyword: [String!]
    ): [OParlOrganization!]
  }

  type OParlOrganization {
    body: OParlBody
    classification: String
    endDate: Date
    externalBody: String
    location: OParlLocation
    meeting(offset: Int, pageSize: Int): [OParlMeeting!]
    membership(offset: Int, pageSize: Int): [OParlMembership!]
    consultation(offset: Int, pageSize: Int): [OParlConsultation!]
    name: String
    organizationType: String
    post: [String!]
    shortName: String
    startDate: Date
    subOrganizationOf: OParlOrganization
    website: String
    ${oParlBase}
  }
`;
