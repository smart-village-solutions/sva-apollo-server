import {
  Consultation,
  File,
  IPaper,
  Location,
  Organization,
  Paper,
  Person,
} from '../../models';

export const paperResolvers = {
  Query: {
    oParlPapers: () => Paper.find(),
  },
  OParlPaper: {
    relatedPaper: (args: IPaper) =>
      args.relatedPaper?.map((value) => Paper.findOne({ externalId: value })),
    superordinatedPaper: (args: IPaper) =>
      args.superordinatedPaper?.map((value) =>
        Paper.findOne({ externalId: value }),
      ),
    subordinatedPaper: (args: IPaper) =>
      args.subordinatedPaper?.map((value) =>
        Paper.findOne({ externalId: value }),
      ),
    mainFile: (args: IPaper) => File.findOne({ externalId: args.mainFile }),
    auxiliaryFile: (args: IPaper) =>
      args.auxiliaryFile?.map((value) => File.findOne({ externalId: value })),
    location: (args: IPaper) =>
      args.location?.map((value) => Location.findOne({ externalId: value })),
    originatorPerson: (args: IPaper) =>
      args.originatorPerson?.map((value) =>
        Person.findOne({ externalId: value }),
      ),
    underDirectionOf: (args: IPaper) =>
      args.underDirectionOf?.map((value) =>
        Organization.findOne({ externalId: value }),
      ),
    originatorOrganization: (args: IPaper) =>
      args.originatorOrganization?.map((value) =>
        Organization.findOne({ externalId: value }),
      ),
    consultation: (args: IPaper) =>
      args.consultation?.map((value) =>
        Consultation.findOne({ externalId: value }),
      ),
  },
};
