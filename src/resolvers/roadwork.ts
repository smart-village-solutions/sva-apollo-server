import { Roadwork } from '../models';

export const createRoadwork = async (_, { name, description }) => {
  const roadwork = new Roadwork({
    name,
    description,
  });

  return roadwork.save();
};

export const deleteRoadwork = async (_, { id }) => {
  const roadwork = await Roadwork.findOne({ _id: id });

  if (roadwork) return roadwork.delete();
};

export const findRoadwork = () => Roadwork.find();

export const updateRoadwork = async (_, { id, name, description }) => {
  const roadwork = await Roadwork.findOne({ _id: id });

  if (roadwork) {
    roadwork.name = name ?? roadwork.name;
    roadwork.description = description ?? roadwork.description;

    return roadwork.save();
  }
};
