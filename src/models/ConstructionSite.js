import mongoose from 'mongoose';

const Location = mongoose.Schema({
  lat: String,
  lon: String
});

const constructionSite = mongoose.Schema({
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
  title: String
}, {
  timestamps: true
});

export const ConstructionSite = mongoose.model('ConstructionSite', constructionSite);
