import { Body, ISystem, System } from '../../models';

export const systemResolvers = {
  Query: {
    oParlSystems: () => System.find(),
  },
  OParlSystem: {
    body: (args: ISystem) =>
      args.body.map((value) => Body.findOne({ externalId: value })),
  },
};
