import { Document, model, Schema } from 'mongoose';
import { optionalStringArray } from '../modelHelpers';
import { OParlBase, oParlBaseSchema } from './OParlBase';

export interface ILocation extends OParlBase {
  description?: string;
  geojson?: string; // TODO: string representation of the GeoJSON might not be what we need/want
  streetAddress?: string;
  room?: string;
  postalCode?: string;
  subLocality?: string;
  locality?: string;
  bodies?: string[]; // array of externalIds of the body objects
  organization?: string[]; // array of externalIds of the organization objects
  meeting?: string[]; // array of externalIds of the meeting objects
  papers?: string[]; // array of externalIds of the paper objects
}

interface ILocationSchema extends ILocation, Document {}

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
  }),
);

export const Location = model<ILocationSchema>('Location', LocationSchema);
