import { Document, model, Schema } from 'mongoose';
import { OParlBase, oParlBaseSchema } from './OParlBase';

// does not use created modified deleted for OParl 1.0
export interface ILegislativeTerm extends OParlBase {
  body?: string; // externalId of the corresponding body
  name?: string;
  startDate?: Date;
  endDate?: Date;
}

interface ILegislativeTermSchema extends ILegislativeTerm, Document {}

// this should always match the interface from above
const LegislativeTermSchema = new Schema<ILegislativeTermSchema>(
  Object.assign(oParlBaseSchema(), {
    body: String,
    name: String,
    startDate: Date,
    endDate: Date,
  }),
);

export const LegislativeTerm = model<ILegislativeTermSchema>(
  'LegislativeTerm',
  LegislativeTermSchema,
);
