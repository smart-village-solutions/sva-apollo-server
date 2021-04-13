import { IMembership, Membership, Organization, Person } from '../../models';
import { findByIds } from '../resolverHelpers';

export const membershipResolvers = {
  Query: {
    oParlMemberships: (_, args: { externalIds?: string[] }) =>
      args.externalIds
        ? findByIds(args.externalIds, Membership)
        : Membership.find(),
  },
  OParlMembership: {
    person: (parent: IMembership) =>
      Person.findOne({ externalId: parent.person }),
    organization: (parent: IMembership) =>
      Organization.findOne({ externalId: parent.organization }),
    onBehalfOf: (parent: IMembership) =>
      Organization.findOne({ externalId: parent.onBehalfOf }),
  },
};
