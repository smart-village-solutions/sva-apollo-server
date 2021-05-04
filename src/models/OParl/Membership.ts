import { Document, model, Schema } from 'mongoose';
import { OParlBase, oParlBaseSchema } from './OParlBase';

// does not use created modified deleted for OParl 1.0
export interface IMembership extends OParlBase {
  person?: string; // externalId of the person object
  organization?: string; // externalId of the organization object
  role?: string;
  votingRight?: boolean;
  startDate?: Date;
  endDate?: Date;
  onBehalfOf?: string; // externalId of the organization object
}

export interface IMembershipSchema extends IMembership, Document {}

// this should always match the interface from above
const MembershipSchema = new Schema<IMembershipSchema>(
  Object.assign(oParlBaseSchema(), {
    person: String,
    organization: String,
    role: String,
    votingRight: Boolean,
    startDate: Date,
    endDate: Date,
    onBehalfOf: String,
  }),
);

export const Membership = model<IMembershipSchema>(
  'Membership',
  MembershipSchema,
);
