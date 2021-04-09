import { Body, ISystem, System } from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const systemResolvers = {
  Query: {
    oParlSystems: (_, args: { externalIds?: string[] }) =>
      args.externalIds ? findByIds(args.externalIds, System) : System.find(),
  },
  OParlSystem: {
    body: async (
      parent: ISystem,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(Body, parent.body, args.offset, args.pageSize),
  },
};
