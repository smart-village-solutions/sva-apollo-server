import { Organization } from '../../models';
import { parseOrganization } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';
import { fetchPaginatedOParlList } from './paginatedList';

export const importOrganization = async (
  value: unknown,
  queue?: ImportQueue,
  createdSince?: Date,
  createdUntil?: Date,
) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.body) {
    addToQueue.push([json.body, ImportType.Body]);
  }

  if (json.location) {
    addToQueue.push([json.location, ImportType.Location]);
  }

  if (json.meeting) {
    json.meeting = await fetchPaginatedOParlList(
      json.meeting,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.membership) {
    addToQueue.push([json.membership, ImportType.Membership]);
  }

  if (json.subOrganizationOf) {
    addToQueue.push([json.subOrganizationOf, ImportType.Organization]);
  }

  if (json.consultation) {
    json.consultation = await fetchPaginatedOParlList(
      json.consultation,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.consultation, ImportType.Consultation]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseOrganization,
      Organization,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing organization from ${value}:`, e);
  }
};
