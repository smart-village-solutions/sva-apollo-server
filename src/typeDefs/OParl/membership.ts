import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const membershipGQL = gql`
  extend type Query {
    oParlMemberships(
      externalIds: [String!]
      keyword: [String!]
      offset: Int
      pageSize: Int
    ): [OParlMembership!]
  }

  type OParlMembership {
    endDate: Date
    onBehalfOf: OParlOrganization
    organization: OParlOrganization
    person: OParlPerson
    role: String
    startDate: Date
    votingRight: Boolean
    ${oParlBase}
  }
`;
