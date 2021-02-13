import { Roadwork } from "./models/Roadwork.js";

export const resolvers = {
  Query: {
    roadworks: () => Roadwork.find()
  },
  Mutation: {
    createRoadwork: async (_, {name, description}) => {
      const roadwork = new Roadwork({ name, description });
      await roadwork.save();
      return roadwork;
    }

  }
};
