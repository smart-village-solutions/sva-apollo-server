import { ConnectOptions } from 'mongoose';

export const databaseLocation = 'mongodb://localhost:27017/test';

export const importUrl = undefined;

export const mongooseOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
};
