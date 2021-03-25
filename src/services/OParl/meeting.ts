import { Meeting } from '../../models';
import { parseMeeting } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importMeeting = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.agendaItem) {
    addToQueue.push([json.agendaItem, ImportType.AgendaItem]);
  }

  if (json.auxiliaryFile) {
    addToQueue.push([json.auxiliaryFile, ImportType.File]);
  }

  if (json.invitation) {
    addToQueue.push([json.invitation, ImportType.File]);
  }

  if (json.location) {
    addToQueue.push([json.location, ImportType.Location]);
  }

  if (json.organization) {
    addToQueue.push([json.organization, ImportType.Organization]);
  }

  if (json.participant) {
    addToQueue.push([json.participant, ImportType.Person]);
  }

  if (json.resultsProtocol) {
    addToQueue.push([json.resultsProtocol, ImportType.File]);
  }

  if (json.verbatimProtocol) {
    addToQueue.push([json.verbatimProtocol, ImportType.File]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseMeeting,
      Meeting,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing meeting from ${value}:`, e);
  }
};
