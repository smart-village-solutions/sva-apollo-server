import { Body, IPerson, Location, Membership, Person } from '../../models';

export const personResolvers = {
  Query: {
    oParlPersons: () => Person.find(),
  },
  OParlPerson: {
    body: (args: IPerson) => Body.findOne({ externalId: args.body }),
    location: (args: IPerson) =>
      Location.findOne({ externalId: args.location }),
    membership: (args: IPerson) =>
      args.membership?.map((value) =>
        Membership.findOne({ externalId: value }),
      ),
  },
};
