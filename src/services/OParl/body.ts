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

  if (json.system) {
    addToQueue.push([json.system, ImportType.System]);
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

  if (json.agendaItem) {
    json.agendaItem = await fetchPaginatedOParlList(
      json.agendaItem,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.agendaItem, ImportType.AgendaItem]);
  }

  if (json.consultation) {
    json.consultation = await fetchPaginatedOParlList(
      json.consultation,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.consultation, ImportType.Consultation]);
  }

  if (json.file) {
    json.file = await fetchPaginatedOParlList(
      json.file,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.file, ImportType.File]);
  }

  if (json.legislativeTermList) {
    json.legislativeTermList = await fetchPaginatedOParlList(
      json.legislativeTermList,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.legislativeTermList, ImportType.LegislativeTerm]);
  }

  if (json.locationList) {
    json.locationList = await fetchPaginatedOParlList(
      json.locationList,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.locationList, ImportType.Location]);
  }

  if (json.membership) {
    json.membership = await fetchPaginatedOParlList(
      json.membership,
      createdSince,
      createdUntil,
    );
    addToQueue.push([json.membership, ImportType.Membership]);
  }

  try {
    return await updateOrCreateEntry(json, parseBody, Body, addToQueue, queue);
  } catch (e) {
    console.log(`Error while importing body from ${value}:`, e);
  }
};
