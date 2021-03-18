import { Body } from '../../models';
import { importBody } from '../../services/OParl/body';

export const findBody = async () => {
  return Body.find();
};

export const updateBody = async (_, { externalId, name }) => {
  const body = await Body.findOne({ externalId });

  const result = await body?.updateOne({ name });

  // this currently returns the old body values, even after updating it
  // however, after requerying it, it is updated.
  // TODO: remove the body from the response?
  return { body, success: !!result?.ok };
};

// this is here for testing purposes
export const fetchOParlBody = importBody;
