import {
  AgendaItem,
  File,
  IMeeting,
  Location,
  Meeting,
  Organization,
  Person,
} from '../../models';

export const meetingResolvers = {
  Query: {
    oParlMeetings: () => Meeting.find(),
  },
  OParlMeeting: {
    location: (args: IMeeting) =>
      Location.findOne({ externalId: args.location }),
    organization: (args: IMeeting) =>
      args.organization?.map((value) =>
        Organization.findOne({ externalId: value }),
      ),
    participant: (args: IMeeting) =>
      args.participant?.map((value) => Person.findOne({ externalId: value })),
    invitation: (args: IMeeting) =>
      File.findOne({ externalId: args.invitation }),
    resultsProtocol: (args: IMeeting) =>
      File.findOne({ externalId: args.resultsProtocol }),
    verbatimProtocol: (args: IMeeting) =>
      File.findOne({ externalId: args.verbatimProtocol }),
    auxiliaryFile: (args: IMeeting) =>
      args.auxiliaryFile?.map((value) => File.findOne({ externalId: value })),
    agendaItem: (args: IMeeting) =>
      args.agendaItem?.map((value) =>
        AgendaItem.findOne({ externalId: value }),
      ),
  },
};
