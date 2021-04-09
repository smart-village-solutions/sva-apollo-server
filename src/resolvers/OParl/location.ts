import {
  Body,
  ILocation,
  Location,
  Meeting,
  Organization,
  Paper,
  Person,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const locationResolvers = {
  Query: {
    oParlLocations: (_, args: { externalIds?: string[] }) =>
      args.externalIds
        ? findByIds(args.externalIds, Location)
        : Location.find(),
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
