import { FilterQuery } from 'mongoose';

import {
  Body,
  ILocation,
  ILocationSchema,
  Location,
  Meeting,
  Organization,
  Paper,
  Person,
} from '../../models';
import { getPaginatedEntriesByIds } from '../resolverHelpers';

export const locationResolvers = {
  Query: {
    oParlLocations: (
      _,
      args: { externalIds?: string[]; keyword?: string[] },
    ) => {
      const filter: FilterQuery<ILocationSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return Location.find(filter);
    },
  },
  OParlLocation: {
    bodies: async (
      parent: ILocation,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(Body, parent.bodies, args.offset, args.pageSize),
    organization: async (
      parent: ILocation,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Organization,
        parent.organization,
        args.offset,
        args.pageSize,
      ),
    meeting: async (
      parent: ILocation,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Meeting,
        parent.meeting,
        args.offset,
        args.pageSize,
      ),
    papers: async (
      parent: ILocation,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Paper,
        parent.papers,
        args.offset,
        args.pageSize,
      ),
    persons: async (
      parent: ILocation,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Person,
        parent.persons,
        args.offset,
        args.pageSize,
      ),
  },
};
