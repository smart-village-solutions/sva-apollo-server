import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface ILocation extends OParlBase {
  description?: string;
  geojson?: string; // string representation of the GeoJSON might not be what we need/want
  streetAddress?: string;
  room?: string;
  postalCode?: string;
  subLocality?: string;
  locality?: string;
  bodies?: string[]; // array of externalIds of the body objects

  // array of externalIds of the organization objects
  // for OParl 1.1 the field is renamed to plural. we map to singular during the import
  // to maintain compatability with 1.0
  // (in addition to that some external oparl systems did not implement this rename)
  organization?: string[];

  // array of externalIds of the meeting objects
  // for OParl 1.1 the field is renamed to plural. we map to singular during the import
  // to maintain compatability with 1.0
  // (in addition to that some external oparl systems did not implement this rename)
  meeting?: string[];
  papers?: string[]; // array of externalIds of the paper objects
  persons?: string[]; // array of externalIds of the person objects; OParl 1.1 only
}

export interface ILocationSchema extends ILocation, Document {}

// this should always match the interface from above
const LocationSchema = new Schema<ILocationSchema>(
  Object.assign(oParlBaseSchema(), {
    description: String,
    geojson: String,
    streetAddress: String,
    room: String,
    postalCode: String,
    subLocality: String,
    locality: String,
    bodies: optionalStringArray,
    organization: optionalStringArray,
    meeting: optionalStringArray,
    papers: optionalStringArray,
    persons: optionalStringArray,
  }),
);

export const Location = model<ILocationSchema>('Location', LocationSchema);
