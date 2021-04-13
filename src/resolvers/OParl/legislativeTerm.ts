import { Body, ILegislativeTerm, LegislativeTerm } from '../../models';
import { findByIds } from '../resolverHelpers';

export const legislativeTermResolvers = {
  Query: {
    oParlLegislativeTerms: (_, args: { externalIds?: string[] }) =>
      args.externalIds
        ? findByIds(args.externalIds, LegislativeTerm)
        : LegislativeTerm.find(),
  },
  OParlLegislativeTerm: {
    body: (parent: ILegislativeTerm) =>
      Body.findOne({ externalId: parent.body }),
  },
};
