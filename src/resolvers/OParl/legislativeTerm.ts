import { FilterQuery } from 'mongoose';

import {
  Body,
  ILegislativeTerm,
  ILegislativeTermSchema,
  LegislativeTerm,
} from '../../models';

export const legislativeTermResolvers = {
  Query: {
    oParlLegislativeTerms: (
      _,
      args: {
        externalIds?: string[];
        keyword?: string[];
        offset?: number;
        pageSize?: number;
      },
    ) => {
      const filter: FilterQuery<ILegislativeTermSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return LegislativeTerm.find(filter, undefined, {
        limit: args.pageSize,
        skip: args.offset,
      });
    },
  },
  OParlLegislativeTerm: {
    body: (parent: ILegislativeTerm) =>
      Body.findOne({ externalId: parent.body }),
  },
};
