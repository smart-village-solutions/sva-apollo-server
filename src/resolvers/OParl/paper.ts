import {
  Body,
  Consultation,
  File,
  IPaper,
  Location,
  Organization,
  Paper,
  Person,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const paperResolvers = {
  Query: {
    oParlPapers: (_, args: { externalIds?: string[] }) =>
      args.externalIds ? findByIds(args.externalIds, Paper) : Paper.find(),
  },
  OParlPaper: {
    body: (parent: IPaper) => Body.findOne({ externalId: parent.body }),
    relatedPaper: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Paper,
        parent.relatedPaper,
        args.offset,
        args.pageSize,
      ),
    superordinatedPaper: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Paper,
        parent.superordinatedPaper,
        args.offset,
        args.pageSize,
      ),
    subordinatedPaper: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Paper,
        parent.subordinatedPaper,
        args.offset,
        args.pageSize,
      ),
    mainFile: (parent: IPaper) => File.findOne({ externalId: parent.mainFile }),
    auxiliaryFile: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        File,
        parent.auxiliaryFile,
        args.offset,
        args.pageSize,
      ),
    location: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Location,
        parent.location,
        args.offset,
        args.pageSize,
      ),
    originatorPerson: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Person,
        parent.originatorPerson,
        args.offset,
        args.pageSize,
      ),
    underDirectionOf: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Organization,
        parent.underDirectionOf,
        args.offset,
        args.pageSize,
      ),
    originatorOrganization: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Organization,
        parent.originatorOrganization,
        args.offset,
        args.pageSize,
      ),
    consultation: async (
      parent: IPaper,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Consultation,
        parent.consultation,
        args.offset,
        args.pageSize,
      ),
  },
};
