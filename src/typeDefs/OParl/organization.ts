import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const organizationGQL = gql`
  extend type Query {
    oParlOrganizations: [OParlOrganization!]
  }

  type OParlOrganization {
    body: OParlBody
    classification: String
    endDate: Date
    externalBody: String
    location: OParlLocation
    meeting: [OParlMeeting!]
    membership: [OParlMembership!]
    consultation: [OParlConsultation!]
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
