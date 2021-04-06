import { AgendaItem, File, IFile, Meeting, Paper } from '../../models';

export const fileResolvers = {
  Query: {
    oParlFiles: () => File.find(),
  },
  OParlFile: {
    masterFile: (args: IFile) => File.findOne({ externalId: args.masterFile }),
    derivativeFile: (args: IFile) =>
      args.derivativeFile?.map((value) => File.findOne({ externalId: value })),
    meeting: (args: IFile) =>
      args.meeting?.map((value) => Meeting.findOne({ externalId: value })),
    agendaItem: (args: IFile) =>
      args.agendaItem?.map((value) =>
        AgendaItem.findOne({ externalId: value }),
      ),
    paper: (args: IFile) =>
      args.paper?.map((value) => Paper.findOne({ externalId: value })),
  },
};
