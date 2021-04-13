import {
  Body,
  Consultation,
  IOrganization,
  Location,
  Meeting,
  Membership,
  Organization,
} from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const organizationResolvers = {
  Query: {
    oParlOrganizations: (_, args: { externalIds?: string[] }) =>
      args.externalIds
        ? findByIds(args.externalIds, Organization)
        : Organization.find(),
  },
  OParlOrganization: {
    body: (parent: IOrganization) => Body.findOne({ externalId: parent.body }),
    consultation: async (
      parent: IOrganization,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Consultation,
        parent.consultation,
        args.offset,
        args.pageSize,
      ),
    meeting: async (
      parent: IOrganization,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Meeting,
        parent.meeting,
        args.offset,
        args.pageSize,
      ),
    membership: async (
      parent: IOrganization,
      args: { offset?: number; pageSize?: number },
    ) =>
      getPaginatedEntriesByIds(
        Membership,
        parent.membership,
        args.offset,
        args.pageSize,
      ),
    subOrganizationOf: (args: IOrganization) =>
      Organization.findOne({ externalId: args.subOrganizationOf }),
    location: (args: IOrganization) =>
      Location.findOne({ externalId: args.location }),
  },
};
