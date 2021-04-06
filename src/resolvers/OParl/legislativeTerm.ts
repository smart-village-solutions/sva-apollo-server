import { Body, ILegislativeTerm, LegislativeTerm } from '../../models';

export const legislativeTermResolvers = {
  Query: {
    oParlLegislativeTerms: () => LegislativeTerm.find(),
  },
  OParlLegislativeTerm: {
    body: (args: ILegislativeTerm) => Body.findOne({ externalId: args.body }),
  },
};
