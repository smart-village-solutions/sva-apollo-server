import { Document, model, Schema } from 'mongoose';
import { optionalStringArray, requiredStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface IBody extends OParlBase {
  name: string;
  shortName?: string;
  website?: string;
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
  legislativeTerm: string[]; // array of externalIds of legislative terms

  // array of externalIds of legislative terms; should match legislativeTerm entry
  // for OParl 1.0 and 1.1 the legislative terms are embedded as an internal object under the key "legislativeTerm"
  // OParl 1.1 adds the legislativeTermListEntry, which is a URL to an external list.
  // during the import we map both to the list of identifiers, and save the legislative terms separately for both entries.
  legislativeTermList?: string[];
  agendaItem?: string[]; // array of externalIds of agenda items; only used in OParl 1.1
  consultation?: string[]; // array of externalIds of consultations; only used in OParl 1.1
  file?: string[]; // array of externalIds of files; only used in OParl 1.1
  membership?: string[]; // array of externalIds of memberships; only used in OParl 1.1
  classification?: string;
  location?: string; // externalId of the location object

  // array of externalIds of locations; only used in OParl 1.1
  // the "location" key corresponds to the "main location" of the body,
  // whereas the locationList contains a list of all referenced locations throughout the system
  locationList?: string[];
}

export interface IBodySchema extends IBody, Document {}

// this should always match the interface from above
const BodySchema = new Schema<IBodySchema>(
  Object.assign(oParlBaseSchema(), {
    name: { type: String, required: true },
    shortName: String,
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
    legislativeTermList: optionalStringArray,
    agendaItem: optionalStringArray,
    consultation: optionalStringArray,
    file: optionalStringArray,
    membership: optionalStringArray,
    classification: String,
    location: String,
    locationList: optionalStringArray,
  }),
);

export const Body = model<IBodySchema>('Body', BodySchema);
