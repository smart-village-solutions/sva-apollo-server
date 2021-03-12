import { model, Schema } from 'mongoose';

const Location = new Schema({
  lat: String,
  lon: String,
});

const constructionSite = new Schema(
  {
    category: String,
    cause: String,
    description: String,
    direction: String,
    endDate: String,
    imageUri: String,
    location: Location,
    locationDescription: String,
    restrictions: [String],
    startDate: String,
    title: String,
  },
  {
    timestamps: true,
  },
);

export const ConstructionSite = model('ConstructionSite', constructionSite);
