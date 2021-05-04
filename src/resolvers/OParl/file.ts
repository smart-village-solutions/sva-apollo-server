import { FilterQuery } from 'mongoose';

import {
  AgendaItem,
  File,
  IFile,
  IFileSchema,
  Meeting,
  Paper,
} from '../../models';
import { getPaginatedEntriesByIds } from '../resolverHelpers';

export const fileResolvers = {
  Query: {
    oParlFiles: (_, args: { externalIds?: string[]; keyword?: string[] }) => {
      const filter: FilterQuery<IFileSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return File.find(filter);
    },
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
