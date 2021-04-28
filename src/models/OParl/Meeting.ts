import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface IMeeting extends OParlBase {
  name?: string;
  meetingState?: string;
  cancelled?: boolean;
  start?: Date;
  end?: Date;
  location?: string; // externalId of the location object
  organization?: string[]; // array of externalIds of the organization objects
  participant?: string[]; // array of externalIds of the person objects
  invitation?: string; // externalId of the file object
  resultsProtocol?: string; // externalId of the file object
  verbatimProtocol?: string; // externalId of the file object
  auxiliaryFile?: string[]; // array of externalIds of the file objects
  agendaItem?: string[]; // array of externalIds of the agenda item objects
}

export interface IMeetingSchema extends IMeeting, Document {}

// this should always match the interface from above
const MeetingSchema = new Schema<IMeetingSchema>(
  Object.assign(oParlBaseSchema(), {
    name: String,
    meetingState: String,
    cancelled: Boolean,
    start: Date,
    end: Date,
    location: String,
    organization: optionalStringArray,
    participant: optionalStringArray,
    invitation: String,
    resultsProtocol: String,
    verbatimProtocol: String,
    auxiliaryFile: optionalStringArray,
    agendaItem: optionalStringArray,
  }),
);

export const Meeting = model<IMeetingSchema>('Meeting', MeetingSchema);
