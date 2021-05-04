import { FilterQuery } from 'mongoose';

import {
  AgendaItem,
  Consultation,
  File,
  IAgendaItem,
  IAgendaItemSchema,
  Meeting,
} from '../../models';
import { getPaginatedEntriesByIds } from '../resolverHelpers';

export const agendaItemResolvers = {
  Query: {
    oParlAgendaItems: (
      _,
      args: { externalIds?: string[]; keyword?: string[] },
    ) => {
      const filter: FilterQuery<IAgendaItemSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return AgendaItem.find(filter);
    },
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
