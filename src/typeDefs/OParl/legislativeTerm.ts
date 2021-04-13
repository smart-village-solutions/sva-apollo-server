import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const legislativeTermGQL = gql`
  extend type Query {
    oParlLegislativeTerms(externalIds: [String!]): [OParlLegislativeTerm!]
  }

  type OParlLegislativeTerm {
    body: OParlBody
    endDate: Date
    name: String
    startDate: Date
    ${oParlBase}
  }
`;
