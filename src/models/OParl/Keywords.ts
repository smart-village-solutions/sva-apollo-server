import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';

export enum KeywordKey {
  agendaItem = 'agendaItem',
  consultation = 'consultation',
  file = 'file',
  legislativeTerm = 'legislativeTerm',
  location = 'location',
  meeting = 'meeting',
  membership = 'membership',
  organization = 'organization',
  paper = 'paper',
  person = 'person',
}

type IKeywords = Partial<{ [t in KeywordKey]: string[] }>;

export interface IKeywordsSchema extends IKeywords, Document {}

// this should always match the interface from above
const KeywordsSchema = new Schema<IKeywordsSchema>({
  agendaItem: optionalStringArray,
  consultation: optionalStringArray,
  file: optionalStringArray,
  legislativeTerm: optionalStringArray,
  location: optionalStringArray,
  meeting: optionalStringArray,
  membership: optionalStringArray,
  organization: optionalStringArray,
  paper: optionalStringArray,
  person: optionalStringArray,
});

export const Keywords = model<IKeywordsSchema>('Keywords', KeywordsSchema);
