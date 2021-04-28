import { Document, model, Schema } from 'mongoose';
import { requiredStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

// OParl systems do not use the keyword property (from oparl base)
export interface ISystem extends OParlBase {
  oparlVersion: string;
  otherOparlVersions?: string[]; // arry of urls to other oparl sytems
  license?: string;
  body: string[]; // array of externalIds of bodies
  name?: string;
  contactEmail?: string;
  contactName?: string;
  website?: string;
  vendor?: string;
  product?: string;
}

export interface ISystemSchema extends ISystem, Document {}

// this should always match the interface from above
const SystemSchema = new Schema<ISystemSchema>(
  Object.assign(oParlBaseSchema(), {
    oparlVersion: { type: String, required: true },
    otherOparlVersions: [{ type: String, required: true }],
    license: String,
    body: requiredStringArray,
    name: String,
    contactEmail: String,
    contactName: String,
    website: String,
    vendor: String,
    product: String,
  }),
);

export const System = model<ISystemSchema>('System', SystemSchema);
