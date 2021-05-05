import { FilterQuery } from 'mongoose';

import { Body, ISystem, ISystemSchema, System } from '../../models';
import { getPaginatedEntriesByIds } from '../resolverHelpers';

export const systemResolvers = {
  Query: {
    oParlSystems: (
      _,
      args: {
        externalIds?: string[];
        keyword?: string[];
        offset?: number;
        pageSize?: number;
      },
    ) => {
      const filter: FilterQuery<ISystemSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return System.find(filter, undefined, {
        limit: args.pageSize,
        skip: args.offset,
      });
    },
  },
  OParlSystem: {
    body: async (
      parent: ISystem,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(Body, parent.body, args.offset, args.pageSize),
  },
};
