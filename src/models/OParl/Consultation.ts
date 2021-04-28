import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

// does not use created modified deleted for OParl 1.0
export interface IConsultation extends OParlBase {
  paper?: string; // externalId of the paper object
  agendaItem?: string; // externalId of the agenda item object
  meeting?: string; // externalId of the meeting object
  organization?: string[]; // array of externalIds of the organization objects
  authoritative?: boolean;
  role?: string;
}

export interface IConsultationSchema extends IConsultation, Document {}

// this should always match the interface from above
const ConsultationSchema = new Schema<IConsultationSchema>(
  Object.assign(oParlBaseSchema(), {
    paper: String,
    agendaItem: String,
    meeting: String,
    organization: optionalStringArray,
    authoritative: Boolean,
    role: String,
  }),
);

export const Consultation = model<IConsultationSchema>(
  'Consultation',
  ConsultationSchema,
);
