import {
  AgendaItem,
  Consultation,
  File,
  IAgendaItem,
  Meeting,
} from '../../models';

export const agendaItemResolvers = {
  Query: {
    oParlAgendaItems: () => AgendaItem.find(),
  },
  OParlAgendaItem: {
    meeting: (args: IAgendaItem) =>
      Meeting.findOne({ externalId: args.meeting }),
    consultation: (args: IAgendaItem) =>
      Consultation.findOne({ externalId: args.consultation }),
    resolutionFile: (args: IAgendaItem) =>
      File.findOne({ externalId: args.resolutionFile }),
    auxiliaryFile: (args: IAgendaItem) =>
      args.auxiliaryFile?.map((value) => File.findOne({ externalId: value })),
  },
};
