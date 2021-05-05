import { FilterQuery } from 'mongoose';

import {
  Body,
  IPerson,
  IPersonSchema,
  Location,
  Membership,
  Person,
} from '../../models';
import { getPaginatedEntriesByIds } from '../resolverHelpers';

export const personResolvers = {
  Query: {
    oParlPersons: (
      _,
      args: {
        externalIds?: string[];
        keyword?: string[];
        offset?: number;
        pageSize?: number;
      },
    ) => {
      const filter: FilterQuery<IPersonSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return Person.find(filter, undefined, {
        limit: args.pageSize,
        skip: args.offset,
      });
    },
  },
  OParlPerson: {
    body: (parent: IPerson) => Body.findOne({ externalId: parent.body }),
    location: (parent: IPerson) =>
      Location.findOne({ externalId: parent.location }),
    membership: async (
      parent: IPerson,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Membership,
        parent.membership,
        args.offset,
        args.pageSize,
      ),
  },
};
