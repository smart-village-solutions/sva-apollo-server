import mongoose from 'mongoose';
import { databaseLocation, mongooseOptions } from '../../../config';

// example usage
// yarn service:oparl:clear
const clearDatabase = async () => {
  await mongoose.connect(databaseLocation, mongooseOptions);

  await mongoose.connection.dropDatabase();

  console.log('cleared database');
  process.exit();
};

clearDatabase();
