import { Document, model, Schema } from 'mongoose';
import { requiredStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface IBody extends OParlBase {
  name: string;
  website?: string;
  license?: string;
  licenseValidSince?: Date;
  oparlSince?: Date;
  ags?: string;
  rgs?: string;
  equivalent?: string[];
  contactEmail?: string;
  contactName?: string;
  organization: string[]; // array of externalIds of organizations
  person: string[]; // array of externalIds of persons
  meeting: string[]; // array of externalIds of meetings
  paper: string[]; // array of externalIds of papers
  legislativeTerm: string[]; // array of externalIds of organizations
  classification?: string;
  location?: string; // externalId of the location object
}

interface IBodySchema extends IBody, Document {}

// this should always match the interface from above
const BodySchema = new Schema<IBodySchema>(
  Object.assign(oParlBaseSchema(), {
    name: { type: String, required: true },
    website: String,
    license: String,
    licenseValidSince: Date,
    oparlSince: Date,
    ags: String,
    rgs: String,
    equivalent: [String],
    contactEmail: String,
    contactName: String,
    organization: requiredStringArray,
    person: requiredStringArray,
    meeting: requiredStringArray,
    paper: requiredStringArray,
    legislativeTerm: requiredStringArray,
    classification: String,
    location: String,
  }),
);

export const Body = model<IBodySchema>('Body', BodySchema);
