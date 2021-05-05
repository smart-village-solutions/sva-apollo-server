import { FilterQuery } from 'mongoose';

import {
  IMembership,
  IMembershipSchema,
  Membership,
  Organization,
  Person,
} from '../../models';

export const membershipResolvers = {
  Query: {
    oParlMemberships: (
      _,
      args: {
        externalIds?: string[];
        keyword?: string[];
        offset?: number;
        pageSize?: number;
      },
    ) => {
      const filter: FilterQuery<IMembershipSchema> = {};

      if (args.keyword?.length) filter.keyword = { $all: args.keyword };

      if (args.externalIds) filter.externalId = { $in: args.externalIds };

      return Membership.find(filter);
    },
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
