import { Location } from '../../models';
import { parseLocation } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importLocation = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.bodies) {
    addToQueue.push([json.bodies, ImportType.Body]);
  }

  if (json.organization) {
    addToQueue.push([json.organization, ImportType.Organization]);
  }

  if (json.meeting) {
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.papers) {
    addToQueue.push([json.papers, ImportType.Paper]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseLocation,
      Location,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing location from ${value}:`, e);
  }
};
