import { FilterQuery } from 'mongoose';

import {
  AgendaItem,
  Consultation,
  IConsultation,
  IConsultationSchema,
  Meeting,
  Organization,
  Paper,
} from '../../models';
import { getPaginatedEntriesByIds } from '../resolverHelpers';

export const consultationResolvers = {
  Query: {
    oParlConsultations: (
      _,
      args: {
        externalIds?: string[];
        keyword?: string[];
        offset?: number;
        pageSize?: number;
      },
    ) => {
      const filter: FilterQuery<IConsultationSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return Consultation.find(filter, undefined, {
        limit: args.pageSize,
        skip: args.offset,
      });
    },
  },
  OParlConsultation: {
    paper: (parent: IConsultation) =>
      Paper.findOne({ externalId: parent.paper }),
    agendaItem: (parent: IConsultation) =>
      AgendaItem.findOne({ externalId: parent.agendaItem }),
    meeting: (parent: IConsultation) =>
      Meeting.findOne({ externalId: parent.meeting }),
    organization: async (
      parent: IConsultation,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Organization,
        parent.organization,
        args.offset,
        args.pageSize,
      ),
  },
};
