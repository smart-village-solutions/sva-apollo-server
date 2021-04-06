import { gql } from 'apollo-server-core';

export const consultationGQL = gql`
  extend type Query {
    oParlConsultations: [OParlConsultation!]
  }

  type OParlConsultation {
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
    agendaItem: OParlAgendaItem
    authoritative: Boolean
    meeting: OParlMeeting
    organization: [OParlOrganization!]
    paper: OParlPaper
    role: String
  }
`;
