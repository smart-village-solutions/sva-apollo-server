import { AgendaItem, File, IFile, Meeting, Paper } from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const fileResolvers = {
  Query: {
    oParlFiles: (_, args: { externalIds?: string[] }) =>
      args.externalIds ? findByIds(args.externalIds, File) : File.find(),
  },
  OParlFile: {
    masterFile: (parent: IFile) =>
      File.findOne({ externalId: parent.masterFile }),
    derivativeFile: async (
      parent: IFile,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        File,
        parent.derivativeFile,
        args.offset,
        args.pageSize,
      ),
    meeting: async (
      parent: IFile,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Meeting,
        parent.meeting,
        args.offset,
        args.pageSize,
      ),
    agendaItem: async (
      parent: IFile,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        AgendaItem,
        parent.agendaItem,
        args.offset,
        args.pageSize,
      ),
    paper: async (
      parent: IFile,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(Paper, parent.paper, args.offset, args.pageSize),
  },
};
