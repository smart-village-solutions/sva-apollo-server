import { Body, IPerson, Location, Membership, Person } from '../../models';
import { findByIds, getPaginatedEntriesByIds } from '../resolverHelpers';

export const personResolvers = {
  Query: {
    oParlPersons: (_, args: { externalIds?: string[] }) =>
      args.externalIds ? findByIds(args.externalIds, Person) : Person.find(),
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
