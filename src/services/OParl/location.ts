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

  // For OParl 1.1 organization was renamed to organizations.
  // We overwrite the organization field with organizations, if organization is not already defined.
  // The organizations field will be ignored afterwards.
  json.organization ??= json.organizations;
  if (json.organization) {
    addToQueue.push([json.organization, ImportType.Organization]);
  }

  // For OParl 1.1 meeting was renamed to meetings.
  // We overwrite the meeting field with meetings, if meeting is not already defined.
  // The meetings field will be ignored afterwards.
  json.meeting ??= json.meetings;
  if (json.meeting) {
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.papers) {
    addToQueue.push([json.papers, ImportType.Paper]);
  }

  if (json.persons) {
    addToQueue.push([json.persons, ImportType.Person]);
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
