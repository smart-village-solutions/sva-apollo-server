import { Document, model, Schema } from 'mongoose';

interface IBucket extends Document {
  myId: string;
  roadworks?: string[];
  buckets?: string[];
}

const BucketSchema = new Schema<IBucket>({
  myId: { type: String, required: true },
  roadworks: { type: [{ type: String, required: true }] },
  buckets: { type: [{ type: String, required: true }] },
});

export const Bucket = model<IBucket>('Bucket', BucketSchema);
