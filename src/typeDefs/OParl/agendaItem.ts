import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const agendaItemGQL = gql`
  extend type Query {
    oParlAgendaItems(
      externalIds: [String!]
      keyword: [String!]
    ): [OParlAgendaItem!]
  }

  type OParlAgendaItem {
    auxiliaryFile(offset: Int, pageSize: Int): [OParlFile!]
    consultation: OParlConsultation
    end: Date
    meeting: OParlMeeting
    name: String
    number: String
    order: Int
    public: Boolean
    resolutionFile: OParlFile
    resolutionText: String
    result: String
    start: Date
    ${oParlBase}
  }
`;
