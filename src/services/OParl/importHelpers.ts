import { fetch } from 'apollo-env';
import { isArray, isString } from 'lodash';
import { OParlModel } from '../../models';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

// we expect the input to be either a json object already, or a reference to a json object
// if the value is a string we interpret it as a reference and fetch the corresponding json
// otherwise we just return the value, because we assume it already is a json object
export const getJson = async (value: unknown) => {
  if (isString(value)) {
    try {
      const response = await fetch(value);

      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.log(`Error while fetching ${value}:`, e);
      return;
    }
  }

  return { ...(value as Record<string, unknown>) };
};

export const updateOrCreateEntry = async (
  json: Record<string, unknown>,
  // TODO: improve type of parsers. for now ensure that this is at least a function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseJson: (...args: any) => any,
  model: OParlModel,
  addToQueue?: [ImportQueueEntry | ImportQueueEntry[], ImportType][],
  queue?: ImportQueue,
) => {
  const parsedJson = parseJson(json);

  let entry = isString(parsedJson.externalId)
    ? await model.findOne({
        externalId: parsedJson.externalId,
      })
    : undefined;

  if (entry) {
    console.log(
      'entry already exists:',
      isString(entry) ? entry : entry.externalId,
    );
    entry.overwrite(parsedJson);
  } else {
    entry = new model(parsedJson);
  }

  await entry.validate();

  // add list of oparl objects to import queue after the whole entry is validated
  addToQueue?.forEach((list) => {
    if (isArray(list[0])) {
      queue?.add(
        ...list[0].map(
          (entry) => [entry, list[1]] as [ImportQueueEntry, ImportType],
        ),
      );
    }
  });

  return await entry.save();
};
