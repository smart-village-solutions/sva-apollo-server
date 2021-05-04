import { UniqueQueue } from '../../UniqueQueue';

export enum ImportType {
  AgendaItem = 'AgendaItem',
  Body = 'Body',
  Consultation = 'Consultation',
  File = 'File',
  LegislativeTerm = 'Legislative Term',
  Location = 'Location',
  Meeting = 'Meeting',
  Membership = 'Membership',
  Organization = 'Organization',
  Paper = 'Paper',
  Person = 'Person',
  System = 'System',
}

export type ImportQueueEntry =
  | (Record<string, unknown> & { id: string })
  | string;

export type ImportQueue = UniqueQueue<[ImportQueueEntry, ImportType]>;
