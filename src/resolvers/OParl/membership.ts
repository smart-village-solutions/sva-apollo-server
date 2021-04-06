import { IMembership, Membership, Organization, Person } from '../../models';

export const membershipResolvers = {
  Query: {
    oParlMemberships: () => Membership.find(),
  },
  OParlMembership: {
    person: (args: IMembership) => Person.findOne({ externalId: args.person }),
    organization: (args: IMembership) =>
      Organization.findOne({ externalId: args.organization }),
    onBehalfOf: (args: IMembership) =>
      Organization.findOne({ externalId: args.onBehalfOf }),
  },
};
