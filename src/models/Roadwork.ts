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

  return roadwork.save();
};

export const deleteRoadwork = async (_, { id }) => {
  const roadwork = await Roadwork.findOne({ _id: id });

  return roadwork.delete();
};

export const findRoadwork = () => Roadwork.find();

export const updateRoadwork = async (_, { id, name, description }) => {
  const roadwork = await Roadwork.findOne({ _id: id });
  roadwork.name = name ?? roadwork.name;
  roadwork.description = description;

  return roadwork.save();
};
