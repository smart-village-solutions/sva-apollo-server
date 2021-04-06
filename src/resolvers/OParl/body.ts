import {
  Body,
  IBody,
  LegislativeTerm,
  Location,
  Meeting,
  Organization,
  Paper,
  Person,
} from '../../models';

export const bodyResolvers = {
  Query: {
    oParlBodies: () => Body.find(),
  },
  OParlBody: {
    organization: (args: IBody) =>
      args.organization.map((value) =>
        Organization.findOne({ externalId: value }),
      ),
    person: (args: IBody) =>
      args.person.map((value) => Person.findOne({ externalId: value })),
    meeting: (args: IBody) =>
      args.meeting.map((value) => Meeting.findOne({ externalId: value })),
    paper: (args: IBody) =>
      args.paper.map((value) => Paper.findOne({ externalId: value })),
    legislativeTerm: (args: IBody) =>
      args.legislativeTerm.map((value) =>
        LegislativeTerm.findOne({ externalId: value }),
      ),
    location: (args: IBody) => Location.findOne({ externalId: args.location }),
  },
};
