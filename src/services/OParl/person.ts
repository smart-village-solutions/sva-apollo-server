import { Person } from '../../models';
import { parsePerson } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importPerson = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.body) {
    addToQueue.push([json.body, ImportType.Body]);
  }

  if (json.location) {
    addToQueue.push([json.location, ImportType.Location]);
  }

  if (json.membership) {
    addToQueue.push([json.membership, ImportType.Membership]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parsePerson,
      Person,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing person from ${value}:`, e);
  }
};
