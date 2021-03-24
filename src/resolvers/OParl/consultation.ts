import {
  AgendaItem,
  Consultation,
  IConsultation,
  Meeting,
  Organization,
  Paper,
} from '../../models';

export const consultationResolvers = {
  Query: {
    oParlConsultations: () => Consultation.find(),
  },
  OParlConsultation: {
    paper: (args: IConsultation) => Paper.findOne({ externalId: args.paper }),
    agendaItem: (args: IConsultation) =>
      AgendaItem.findOne({ externalId: args.agendaItem }),
    meeting: (args: IConsultation) =>
      Meeting.findOne({ externalId: args.meeting }),
    organization: (args: IConsultation) =>
      args.organization?.map((value) =>
        Organization.findOne({ externalId: value }),
      ),
  },
};
