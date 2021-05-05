import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const legislativeTermGQL = gql`
  extend type Query {
    oParlLegislativeTerms(
      externalIds: [String!]
      keyword: [String!]
      offset: Int
      pageSize: Int
    ): [OParlLegislativeTerm!]
  }

  type OParlLegislativeTerm {
    body: OParlBody
    endDate: Date
    name: String
    startDate: Date
    ${oParlBase}
  }
`;
