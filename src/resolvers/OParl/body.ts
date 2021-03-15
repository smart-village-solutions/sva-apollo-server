import { fetch } from 'apollo-env';

import { Body } from '../../models';
import { createBodyFromJSON } from '../../services/OParl/body';

export const findBody = async () => {
  return Body.find();
};

export const updateBody = async (_, { externalId, name }) => {
  const body = await Body.findOne({ externalId });

  const result = await body?.updateOne({ name });

  // this currently returns the old body values, even after updating it
  // however, after requerying it, it is updated.
  // TODO: remove the body from the response?
  return { body, success: result.ok };
};

// fetch and save a body
// TODO: improve naming and try to make generic to reuse for all types?
//       fetch -> validate -> parse -> save
export const fetchOParlBody = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();

      createBodyFromJSON(json);
    }
  } catch (e) {
    console.log(e);
  }
};
