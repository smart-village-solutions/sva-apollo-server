import { Paper } from '../../models';
import { parsePaper } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';

export const importPaper = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.auxiliaryFile) {
    addToQueue.push([json.auxiliaryFile, ImportType.File]);
  }

  if (json.consultation) {
    addToQueue.push([json.consultation, ImportType.Consultation]);
  }

  if (json.location) {
    addToQueue.push([json.location, ImportType.Location]);
  }

  if (json.mainFile) {
    addToQueue.push([json.mainFile, ImportType.File]);
  }

  if (json.originatorOrganization) {
    addToQueue.push([json.originatorOrganization, ImportType.Organization]);
  }

  if (json.originatorPerson) {
    addToQueue.push([json.originatorPerson, ImportType.Person]);
  }

  if (json.relatedPaper) {
    addToQueue.push([json.relatedPaper, ImportType.Paper]);
  }

  if (json.subordinatedPaper) {
    addToQueue.push([json.subordinatedPaper, ImportType.Paper]);
  }

  if (json.superordinatedPaper) {
    addToQueue.push([json.superordinatedPaper, ImportType.Paper]);
  }

  if (json.underDirectionOf) {
    addToQueue.push([json.underDirectionOf, ImportType.Organization]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parsePaper,
      Paper,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing paper from ${value}:`, e);
  }
};
