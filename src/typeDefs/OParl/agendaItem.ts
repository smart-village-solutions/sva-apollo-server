import { gql } from 'apollo-server-core';

export const agendaItemGQL = gql`
  extend type Query {
    oParlAgendaItems: [OParlAgendaItem!]
  }

  type OParlAgendaItem {
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
    auxiliaryFile: [OParlFile!]
    consultation: OParlConsultation
    end: Date
    meeting: OParlMeeting
    name: String
    number: String
    public: Boolean
    resolutionFile: OParlFile
    resolutionText: String
    result: String
    start: Date
  }
`;
