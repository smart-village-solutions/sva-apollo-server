import {
  AgendaItem,
  Body,
  Consultation,
  IBody,
  LegislativeTerm,
  Location,
  Meeting,
  Membership,
  Organization,
  Paper,
  Person,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const bodyResolvers = {
  Query: {
    oParlBodies: (_, args: { externalIds?: string[] }) =>
      args.externalIds ? findByIds(args.externalIds, Body) : Body.find(),
  },
  OParlBody: {
    agendaItem: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        AgendaItem,
        parent.agendaItem,
        args.offset,
        args.pageSize,
      ),

    consultation: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Consultation,
        parent.consultation,
        args.offset,
        args.pageSize,
      ),

    legislativeTerm: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        LegislativeTerm,
        parent.legislativeTerm,
        args.offset,
        args.pageSize,
      ),

    legislativeTermList: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        LegislativeTerm,
        parent.legislativeTermList,
        args.offset,
        args.pageSize,
      ),

    location: (parent: IBody) =>
      Location.findOne({ externalId: parent.location }),
    locationList: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Location,
        parent.locationList,
        args.offset,
        args.pageSize,
      ),

    meeting: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Meeting,
        parent.meeting,
        args.offset,
        args.pageSize,
      ),

    membership: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Membership,
        parent.membership,
        args.offset,
        args.pageSize,
      ),

    organization: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Organization,
        parent.organization,
        args.offset,
        args.pageSize,
      ),

    paper: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(Paper, parent.paper, args.offset, args.pageSize),

    person: async (
      parent: IBody,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Person,
        parent.person,
        args.offset,
        args.pageSize,
      ),
  },
};
