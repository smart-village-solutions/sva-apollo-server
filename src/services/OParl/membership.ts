import { Membership } from '../../models';
import { parseMembership } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importMembership = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.person) {
    addToQueue.push([json.person, ImportType.Person]);
  }

  if (json.organization) {
    addToQueue.push([json.organization, ImportType.Organization]);
  }

  if (json.onBehalfOf) {
    addToQueue.push([json.onBehalfOf, ImportType.Organization]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseMembership,
      Membership,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing membership from ${value}:`, e);
  }
};
