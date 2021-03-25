import { Body } from '../../models';
import { parseBody } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';
import { fetchPaginatedOParlList } from './paginatedList';

export const importBody = async (
  value: unknown,
  queue?: ImportQueue,
  createdSince?: Date,
  createdUntil?: Date,
) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.legislativeTerm) {
    addToQueue.push([json.legislativeTerm, ImportType.LegislativeTerm]);
  }

  if (json.meeting) {
    json.meeting = await fetchPaginatedOParlList(
      json.meeting,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.organization) {
    json.organization = await fetchPaginatedOParlList(
      json.organization,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.organization, ImportType.Organization]);
  }

  if (json.paper) {
    json.paper = await fetchPaginatedOParlList(
      json.paper,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.paper, ImportType.Paper]);
  }

  if (json.person) {
    json.person = await fetchPaginatedOParlList(
      json.person,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.person, ImportType.Person]);
  }

  try {
    return await updateOrCreateEntry(json, parseBody, Body, addToQueue, queue);
  } catch (e) {
    console.log(`Error while importing body from ${value}:`, e);
  }
};
