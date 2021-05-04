import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

// does not use created modified deleted for OParl 1.0
export interface IAgendaItem extends OParlBase {
  meeting?: string; // externalId of a meeting
  number?: string; // number in the order of the meeting. could also be "VII" or "a)"
  order?: number; // actual numerical position in the order of the meeting; this is madatory for oparl 1.1 systems, but to allow this to work with both 1.1 and 1.0 we make it optional.
  name?: string;
  public?: boolean;
  consultation?: string; // externalId of a consultation
  result?: string;
  resolutionText?: string;
  resolutionFile?: string; // externalId of the file object
  auxiliaryFile?: string[]; // array of externalIds of the paper objects
  start?: Date;
  end?: Date;
}

export interface IAgendaItemSchema extends IAgendaItem, Document {}

// this should always match the interface from above
const AgendaItemSchema = new Schema<IAgendaItemSchema>(
  Object.assign(oParlBaseSchema(), {
    meeting: String,
    number: String,
    order: Number,
    name: String,
    public: Boolean,
    consultation: String,
    result: String,
    resolutionText: String,
    resolutionFile: String,
    auxiliaryFile: optionalStringArray,
    start: Date,
    end: Date,
  }),
);

export const AgendaItem = model<IAgendaItemSchema>(
  'AgendaItem',
  AgendaItemSchema,
);
