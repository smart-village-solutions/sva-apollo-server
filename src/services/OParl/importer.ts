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

const preferFullEntry = (a: [ImportQueueEntry, ImportType]) => {
  return !isString(a[0]);
};

export const importOParl = async (
  entryUrl: string,
  entryType = ImportType.System,
) => {
  // TODO: get last import date

  // use a queue that saves the importer function which should be used with the corresponding url
  const importQueue: ImportQueue = new UniqueQueue<
    [ImportQueueEntry, ImportType]
  >(getId, preferFullEntry, [[entryUrl, entryType]]);

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
