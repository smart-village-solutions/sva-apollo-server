import { File } from '../../models';
import { parseFile } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importFile = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.agendaItem) {
    addToQueue.push([json.agendaItem, ImportType.AgendaItem]);
  }

  if (json.derivativeFile) {
    addToQueue.push([json.derivativeFile, ImportType.File]);
  }

  if (json.masterFile) {
    addToQueue.push([json.masterFile, ImportType.File]);
  }

  if (json.meeting) {
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.paper) {
    addToQueue.push([json.paper, ImportType.Paper]);
  }

  try {
    return await updateOrCreateEntry(json, parseFile, File, addToQueue, queue);
  } catch (e) {
    console.log(`Error while importing file from ${value}:`, e);
  }
};
