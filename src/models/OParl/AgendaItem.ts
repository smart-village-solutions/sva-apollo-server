import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

// does not use created modified deleted for OParl 1.0
// FIXME: does have extra mandatory property "order" for OParl 1.1
export interface IAgendaItem extends OParlBase {
  meeting?: string;
  number?: string; // number in the order of the meeting. could also be "VII" or "a)"
  name?: string;
  public?: boolean;
  consultation?: string;
  result?: string;
  resolutionText?: string;
  resolutionFile?: string; // externalId of the file object
  auxiliaryFile?: string[]; // array of externalIds of the paper objects
  start?: Date;
  end?: Date;
}

interface IAgendaItemSchema extends IAgendaItem, Document {}

// this should always match the interface from above
const AgendaItemSchema = new Schema<IAgendaItemSchema>(
  Object.assign(oParlBaseSchema(), {
    meeting: String,
    number: String,
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
