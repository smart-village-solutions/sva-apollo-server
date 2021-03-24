import {
  Body,
  ILocation,
  Location,
  Meeting,
  Organization,
  Paper,
} from '../../models';

export const locationResolvers = {
  Query: {
    oParlLocations: () => Location.find(),
  },
  OParlLocation: {
    bodies: (args: ILocation) =>
      args.bodies?.map((value) => Body.findOne({ externalId: value })),
    organization: (args: ILocation) =>
      args.organization?.map((value) =>
        Organization.findOne({ externalId: value }),
      ),
    meeting: (args: ILocation) =>
      args.meeting?.map((value) => Meeting.findOne({ externalId: value })),
    papers: (args: ILocation) =>
      args.papers?.map((value) => Paper.findOne({ externalId: value })),
  },
};
