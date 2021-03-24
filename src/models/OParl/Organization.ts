import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface IOrganization extends OParlBase {
  body?: string; // externalId of a body
  name?: string;
  membership?: string[]; // array of external ids of memberships
  meeting?: string[]; // array of external ids of meetings
  shortName?: string;
  post?: string[];
  subOrganizationOf?: string; // externalId of an organization
  organizationType?: string;
  classification?: string;
  startDate?: Date;
  endDate?: Date;
  website?: string;
  location?: string; // externalId of the location object
  externalBody?: string; // externalId of a body of another OParl system (which will not be handled for now)
}

interface IOrganizationSchema extends IOrganization, Document {}

// this should always match the interface from above
const OrganizationSchema = new Schema<IOrganizationSchema>(
  Object.assign(oParlBaseSchema(), {
    body: String,
    name: String,
    membership: optionalStringArray,
    meeting: optionalStringArray,
    shortName: String,
    post: optionalStringArray,
    subOrganizationOf: String,
    organizationType: String,
    classification: String,
    startDate: Date,
    endDate: Date,
    website: String,
    location: String,
    externalBody: String,
  }),
);

export const Organization = model<IOrganizationSchema>(
  'Organization',
  OrganizationSchema,
);
