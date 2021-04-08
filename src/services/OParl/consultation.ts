import { Consultation } from '../../models';
import { parseConsultation } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importConsultation = async (
  value: unknown,
  queue?: ImportQueue,
) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.agendaItem) {
    addToQueue.push([json.agendaItem, ImportType.AgendaItem]);
  }

  if (json.meeting) {
    addToQueue.push([json.meeting, ImportType.Meeting]);
  }

  if (json.organization) {
    addToQueue.push([json.organization, ImportType.Organization]);
  }

  if (json.paper) {
    addToQueue.push([json.paper, ImportType.Paper]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseConsultation,
      Consultation,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing consultation from ${value}:`, e);
  }
};
