import {
  Body,
  IOrganization,
  Location,
  Meeting,
  Membership,
  Organization,
} from '../../models';

export const organizationResolvers = {
  Query: {
    oParlOrganizations: () => Organization.find(),
  },
  OParlOrganization: {
    body: (args: IOrganization) => Body.findOne({ externalId: args.body }),
    meeting: (args: IOrganization) =>
      args.membership?.map((value) => Meeting.findOne({ externalId: value })),
    membership: (args: IOrganization) =>
      args.membership?.map((value) =>
        Membership.findOne({ externalId: value }),
      ),
    subOrganizationOf: (args: IOrganization) =>
      Organization.findOne({ externalId: args.subOrganizationOf }),
    location: (args: IOrganization) =>
      Location.findOne({ externalId: args.location }),
  },
};
