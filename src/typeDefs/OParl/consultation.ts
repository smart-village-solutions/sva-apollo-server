import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const consultationGQL = gql`
  extend type Query {
    oParlConsultations(
      externalIds: [String!]
      keyword: [String!]
    ): [OParlConsultation!]
  }

  type OParlConsultation {
    agendaItem: OParlAgendaItem
    authoritative: Boolean
    meeting: OParlMeeting
    organization(offset: Int, pageSize: Int): [OParlOrganization!]
    paper: OParlPaper
    role: String
    ${oParlBase}
  }
`;
