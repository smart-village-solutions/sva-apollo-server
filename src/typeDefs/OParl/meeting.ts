import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const meetingGQL = gql`
  extend type Query {
    oParlMeetings(
      after: String
      before: String
      externalIds: [String!]
      keyword: [String!]
    ): [OParlMeeting!]
  }

  type OParlMeeting {
    agendaItem(offset: Int, pageSize: Int): [OParlAgendaItem!]
    auxiliaryFile(offset: Int, pageSize: Int): [OParlFile!]
    cancelled: Boolean
    end: Date
    invitation: OParlFile
    location: OParlLocation
    meetingState: String
    name: String
    organization(offset: Int, pageSize: Int): [OParlOrganization!]
    participant(offset: Int, pageSize: Int): [OParlPerson!]
    resultsProtocol: OParlFile
    start: Date
    verbatimProtocol: OParlFile
    ${oParlBase}
  }
`;
