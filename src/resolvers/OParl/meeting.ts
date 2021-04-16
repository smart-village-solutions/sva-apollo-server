import {
  AgendaItem,
  File,
  IMeeting,
  Location,
  Meeting,
  Organization,
  Person,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const meetingResolvers = {
  Query: {
    oParlMeetings: (
      _,
      args: { externalIds?: string[]; before?: string; after?: string },
    ) => {
      const dateFilter: { $gte?: Date; $lt?: Date } = {};
      if (args.after) dateFilter.$gte = new Date(args.after);
      if (args.before) dateFilter.$lt = new Date(args.before);

      return args.externalIds
        ? findByIds(args.externalIds, Meeting)
        : Meeting.find({
            start: dateFilter,
          });
    },
  },
  OParlMeeting: {
    location: (parent: IMeeting) =>
      Location.findOne({ externalId: parent.location }),
    organization: async (
      parent: IMeeting,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Organization,
        parent.organization,
        args.offset,
        args.pageSize,
      ),
    participant: async (
      parent: IMeeting,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Person,
        parent.participant,
        args.offset,
        args.pageSize,
      ),
    invitation: (parent: IMeeting) =>
      File.findOne({ externalId: parent.invitation }),
    resultsProtocol: (parent: IMeeting) =>
      File.findOne({ externalId: parent.resultsProtocol }),
    verbatimProtocol: (parent: IMeeting) =>
      File.findOne({ externalId: parent.verbatimProtocol }),
    auxiliaryFile: async (
      parent: IMeeting,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        File,
        parent.auxiliaryFile,
        args.offset,
        args.pageSize,
      ),
    agendaItem: async (
      parent: IMeeting,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        AgendaItem,
        parent.agendaItem,
        args.offset,
        args.pageSize,
      ),
  },
};
