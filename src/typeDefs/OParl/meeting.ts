import { gql } from 'apollo-server-core';

export const meetingGQL = gql`
  extend type Query {
    oParlMeetings: [OParlMeeting!]
  }

  type OParlMeeting {
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
    agendaItem: [OParlAgendaItem!]
    auxiliaryFile: [OParlFile!]
    cancelled: Boolean
    end: Date
    invitation: OParlFile
    location: OParlLocation
    meetingState: String
    name: String
    organization: [OParlOrganization!]
    participant: [OParlPerson!]
    resultsProtocol: OParlFile
    start: Date
    verbatimProtocol: OParlFile
  }
`;
