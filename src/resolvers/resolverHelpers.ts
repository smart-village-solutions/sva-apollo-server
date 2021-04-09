import { OParlInterface, OParlModel } from '../models';

const getPage = <T>(list: T[], pageSize = 10, offset?: number) => {
  const actualOffset = offset ?? 0;

  return list.slice(actualOffset, actualOffset + pageSize);
};

export const findByIds = async (externalIds: string[], model: OParlModel) => {
  const result: OParlInterface[] = [];
  await Promise.all(
    externalIds.map(async (externalId) => {
      const org = await model.findOne({ externalId });
      if (org) result.push(org);
    }),
  );
  return result;
};

export const getPaginatedEntriesByIds = async (
  model: OParlModel,
  externalIds?: string[],
  offset?: number,
  pageSize?: number,
) => {
  if (!externalIds) return [];

  const page = getPage(externalIds, pageSize, offset);
  const result = await findByIds(page, model);
  return result;
};
