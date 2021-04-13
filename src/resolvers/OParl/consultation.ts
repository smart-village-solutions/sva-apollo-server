import {
  AgendaItem,
  Consultation,
  IConsultation,
  Meeting,
  Organization,
  Paper,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const consultationResolvers = {
  Query: {
    oParlConsultations: (_, args: { externalIds?: string[] }) =>
      args.externalIds
        ? findByIds(args.externalIds, Consultation)
        : Consultation.find(),
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
