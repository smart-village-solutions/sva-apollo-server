import { System } from '../../models';
import { parseSystem } from '../../parser';
import { getJson, updateOrCreateEntry } from './importHelpers';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';
import { fetchPaginatedOParlList } from './paginatedList';

// import flow
// 1. fetch json if it was not already the whole json
// 2. create db object
//   2.1. validation necessary for parsing (done in parser)
//   2.2. parse json
//   2.3. create object
// 3. validate db object
// 4. queue new related objects
// 5. save to db

export const importSystem = async (value: unknown, queue?: ImportQueue) => {
  const json = await getJson(value);

  if (!json) return;

  const addToQueue: [ImportQueueEntry | ImportQueueEntry[], ImportType][] = [];

  if (json.body) {
    json.body = await fetchPaginatedOParlList(json.body);
    addToQueue.push([json.body, ImportType.Body]);
  }

  try {
    return await updateOrCreateEntry(
      json,
      parseSystem,
      System,
      addToQueue,
      queue,
    );
  } catch (e) {
    console.log(`Error while importing system from ${value}:`, e);
  }
};
