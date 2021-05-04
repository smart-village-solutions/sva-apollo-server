import { Document, model, Schema } from 'mongoose';

interface IRoadwork extends Document {
  name: string;
  description?: string;
}

const RoadworkSchema = new Schema<IRoadwork>({
  name: { type: String, required: true },
  description: { type: String },
});

export const Roadwork = model<IRoadwork>('Roadwork', RoadworkSchema);
