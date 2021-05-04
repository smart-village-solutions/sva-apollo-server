import { AgendaItem } from '../../models';
import { parseAgendaItem } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importAgendaItem = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.consultation) {
    addToQueue.push([json.consultation, ImportType.Consultation]);
  }

  if (json.meeting) {
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.resolutionFile) {
    addToQueue.push([json.resolutionFile, ImportType.File]);
  }

  if (json.auxiliaryFile) {
    addToQueue.push([json.auxiliaryFile, ImportType.File]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseAgendaItem,
      AgendaItem,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing agenda item from ${value}:`, e);
  }
};
