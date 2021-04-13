import {
  AgendaItem,
  Consultation,
  File,
  IAgendaItem,
  Meeting,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const agendaItemResolvers = {
  Query: {
    oParlAgendaItems: (_, args: { externalIds?: string[] }) =>
      args.externalIds
        ? findByIds(args.externalIds, AgendaItem)
        : AgendaItem.find(),
  },
  OParlAgendaItem: {
    meeting: (parent: IAgendaItem) =>
      Meeting.findOne({ externalId: parent.meeting }),
    consultation: (parent: IAgendaItem) =>
      Consultation.findOne({ externalId: parent.consultation }),
    resolutionFile: (parent: IAgendaItem) =>
      File.findOne({ externalId: parent.resolutionFile }),
    auxiliaryFile: async (
      parent: IAgendaItem,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        File,
        parent.auxiliaryFile,
        args.offset,
        args.pageSize,
      ),
  },
};
