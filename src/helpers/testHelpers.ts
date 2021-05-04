import MongoMemoryServer from 'mongodb-memory-server-core';
import mongoose from 'mongoose';

export const setupTestDataBase = (databaseName: string) => {
  const mongod = new MongoMemoryServer();

  return {
    beforeAll: async () => {
      const uri = await mongod.getUri(databaseName);

      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
      });
      await mongoose.connection.dropDatabase();
    },
    afterAll: async () => {
      await mongoose.connection.close();
      mongod.stop();
    },
  };
};

export const basicImportTest = (
  importer,
  testUrl: string,
  createdSince?: Date,
  createdUntil?: Date,
) => {
  const queue = undefined;

  return async () => {
    const res = await importer(testUrl, queue, createdSince, createdUntil);
    expect(res).toBeDefined();
    const json = res?.toJSON();
    delete json?._id;
    expect(json).toMatchSnapshot();
  };
};

export const invalidUrlTest = (importer) => async () => {
  const lt = await importer(
    'https://smart-village.solutions/smart-village-solutions/',
  );
  expect(lt).toBeUndefined();
};
