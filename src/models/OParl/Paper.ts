import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface IPaper extends OParlBase {
  body?: string; // externalId of a body
  name?: string;
  reference?: string;
  date?: Date;
  paperType?: string;
  relatedPaper?: string[]; // array of externalIds of the paper objects
  superordinatedPaper?: string[]; // array of externalIds of the paper objects
  subordinatedPaper?: string[]; // array of externalIds of the paper objects
  mainFile?: string; // externalId of the paper object
  auxiliaryFile?: string[]; // array of externalIds of the paper objects
  location?: string[]; // array of externalIds of the location objects
  originatorPerson?: string[]; // array of externalIds of the person objects
  underDirectionOf?: string[]; // array of externalIds of the organization objects
  originatorOrganization?: string[]; // array of externalIds of the organization objects
  consultation?: string[]; // array of externalIds of the consultation objects
}

interface IPaperSchema extends IPaper, Document {}

// this should always match the interface from above
const PaperSchema = new Schema<IPaperSchema>(
  Object.assign(oParlBaseSchema(), {
    body: String,
    name: String,
    reference: String,
    date: Date,
    paperType: String,
    relatedPaper: optionalStringArray,
    superordinatedPaper: optionalStringArray,
    subordinatedPaper: optionalStringArray,
    mainFile: String,
    auxiliaryFile: optionalStringArray,
    location: optionalStringArray,
    originatorPerson: optionalStringArray,
    underDirectionOf: optionalStringArray,
    originatorOrganization: optionalStringArray,
    consultation: optionalStringArray,
  }),
);

export const Paper = model<IPaperSchema>('Paper', PaperSchema);
