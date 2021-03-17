import { Document, model, Schema } from 'mongoose';

interface IRoadwork extends Document {
  name: string;
  description?: string;
}

const RoadworkSchema = new Schema<IRoadwork>({
  name: { type: String, required: true },
  description: { type: String },
});

const Roadwork = model<IRoadwork>('Roadwork', RoadworkSchema);

export const createRoadwork = async (_, { name, description }) => {
  const roadwork = new Roadwork({
    name,
    description,
  });

  console.log(roadwork);

  return roadwork.save();
};

export const findRoadwork = () => Roadwork.find();
