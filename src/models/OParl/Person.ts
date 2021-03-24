import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface IPerson extends OParlBase {
  body?: string; // externalId of a body
  name?: string;
  familyName?: string;
  givenName?: string;
  formOfAddress?: string;
  affix?: string;
  title?: string[];
  gender?: string;
  phone?: string[];
  email?: string[];
  location?: string; // externalId of a location
  status?: string[];
  membership?: string[]; // array of externalIds of the membership objects
  life?: string;
  lifeSource?: string;
}

interface IPersonSchema extends IPerson, Document {}

// this should always match the interface from above
const PersonSchema = new Schema<IPersonSchema>(
  Object.assign(oParlBaseSchema(), {
    body: String,
    name: String,
    familyName: String,
    givenName: String,
    formOfAddress: String,
    affix: String,
    title: optionalStringArray,
    gender: String,
    phone: optionalStringArray,
    email: optionalStringArray,
    location: String,
    status: optionalStringArray,
    membership: optionalStringArray,
    life: String,
    lifeSource: String,
  }),
);

export const Person = model<IPersonSchema>('Person', PersonSchema);
