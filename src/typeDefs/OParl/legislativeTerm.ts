import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const legislativeTermGQL = gql`
  extend type Query {
    oParlLegislativeTerms: [OParlLegislativeTerm!]
  }

  type OParlLegislativeTerm {
    body: OParlBody
    endDate: Date
    name: String
    startDate: Date
    ${oParlBase}
  }
`;
