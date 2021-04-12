import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const meetingGQL = gql`
  extend type Query {
    oParlMeetings: [OParlMeeting!]
  }

  type OParlMeeting {
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
    ${oParlBase}
  }
`;
