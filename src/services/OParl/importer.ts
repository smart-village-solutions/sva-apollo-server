// TODO: define entry point through script

import { isString } from 'lodash';

import { UniqueQueue } from '../../UniqueQueue';
import { importAgendaItem } from './agendaItem';
import { importBody } from './body';
import { importConsultation } from './consultation';
import { importFile } from './file';
import { ImportQueue, ImportQueueEntry, ImportType } from './ImportTypes';
import { importLegislativeTerm } from './legislativeTerm';
import { importLocation } from './location';
import { importMeeting } from './meeting';
import { importMembership } from './membership';
import { importOrganization } from './organization';
import { importPaper } from './paper';
import { importPerson } from './person';
import { importSystem } from './system';

const getId = (value: [ImportQueueEntry, ImportType]) => {
  if (isString(value[0])) return value[0];
  return value[0].id;
};

export const preferId = (
  valueToCheck: [ImportQueueEntry, ImportType],
  index: number,
  entries: [ImportQueueEntry, ImportType][],
): boolean => {
  const id = getId(valueToCheck);

  // find the first index of a non string entry that has the id
  const nonStringIndex = entries.findIndex(
    (entry) => getId(entry) === id && !isString(entry),
  );

  // find the first index of an entry that has the id
  const maybeStringIndex = entries.findIndex((entry) => getId(entry) === id);

  // if there is a non string entry then the nonStringIndex
  // is greater than or equal to the maybeStringIndex
  // otherwise it is -1

  // the maybeStringIndex is always at most the current index
  // but always non negative because the valueToCheck has its own id

  // that means that the maximum of the two indices is always the
  // first index of a non string value that has the id, if it exists,
  // and the first index of a string value that has the id, if no
  // non string value that has the id exists
  return Math.max(nonStringIndex, maybeStringIndex) === index;
};

const relateToSameId = (
  a: [ImportQueueEntry, ImportType],
  b: [ImportQueueEntry, ImportType],
) => getId(a) === getId(b);

export const importOParl = async (systemUrl: string) => {
  // TODO: get last import date

  // use a queue that saves the importer function which should be used with the corresponding url
  const importQueue: ImportQueue = new UniqueQueue<
    [ImportQueueEntry, ImportType]
  >([[systemUrl, ImportType.System]], preferId, relateToSameId);

  let next = importQueue.next();

  while (next) {
    const [data, type] = next;

    await getImporterFunction(type)?.(data, importQueue);

    next = importQueue.next();
  }
  // TODO: set last import date

  return true;
};

const getImporterFunction = (type: ImportType) => {
  switch (type) {
    case ImportType.AgendaItem:
      return importAgendaItem;
    case ImportType.Body:
      return importBody;
    case ImportType.Consultation:
      return importConsultation;
    case ImportType.File:
      return importFile;
    case ImportType.LegislativeTerm:
      return importLegislativeTerm;
    case ImportType.Location:
      return importLocation;
    case ImportType.Meeting:
      return importMeeting;
    case ImportType.Membership:
      return importMembership;
    case ImportType.Organization:
      return importOrganization;
    case ImportType.Paper:
      return importPaper;
    case ImportType.Person:
      return importPerson;
    case ImportType.System:
      return importSystem;
  }
};
