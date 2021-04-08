import { LegislativeTerm } from '../../models';
import { parseLegislativeTerm } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importLegislativeTerm = async (
  value: unknown,
  queue?: ImportQueue,
) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.body) {
    addToQueue.push([json.body, ImportType.Body]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseLegislativeTerm,
      LegislativeTerm,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing legislative term from ${value}:`, e);
  }
};
