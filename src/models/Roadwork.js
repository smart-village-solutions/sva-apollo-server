import mongoose from 'mongoose';

export const Roadwork = mongoose.model('Roadwork', {
  name: String,
  description: String,
});
