import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const consultationGQL = gql`
  extend type Query {
    oParlConsultations: [OParlConsultation!]
  }

  type OParlConsultation {
    agendaItem: OParlAgendaItem
    authoritative: Boolean
    meeting: OParlMeeting
    organization: [OParlOrganization!]
    paper: OParlPaper
    role: String
    ${oParlBase}
  }
`;
