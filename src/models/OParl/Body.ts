import { Document, model, Schema } from 'mongoose';
import { requiredStringArray } from '../modelHelpers';
import { OParlBase } from './OParlBase';

// TODO: leftover from experimentation
// can be used in the future once those types are properly implemented
interface ILegislativeTerm extends OParlBase {
  body: string;
  name?: string;
  startDate?: Date;
  endDate?: Date;
}

interface ILocation extends OParlBase {
  description?: string;
  geojson?: unknown;
  streetAddress?: string;
  room?: string;
  postalCode?: string;
  subLocality?: string;
  locality?: string;
  bodies?: string[];
  organization?: string[];
  meeting?: string[];
  papers?: string[];
}

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
  organization: string;
  person: string;
  meeting: string;
  paper: string;
  legislativeTerm: string[];
  classification?: string;
  location?: string;
}

interface IBodySchema extends IBody, Document {}

// this should always match the interface from above
const BodySchema = new Schema<IBodySchema>({
  externalId: { type: String, required: true },
  type: { type: String, required: true },
  created: Date,
  modified: Date,
  keyword: [{ type: String, required: true }],
  web: String,
  deleted: Boolean,
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
  organization: String,
  person: String,
  meeting: String,
  paper: String,
  legislativeTerm: requiredStringArray,
  classification: String,
  location: String,
});

export const Body = model<IBodySchema>('Body', BodySchema);
