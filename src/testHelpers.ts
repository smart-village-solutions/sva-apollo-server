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
    },
    afterAll: async () => {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      mongod.stop();
    },
  };
};

export const basicImportTest = (importer, testUrl: string) => {
  return async () => {
    const lt = await importer(testUrl);
    expect(lt).toBeDefined();
    const json = lt?.toJSON();
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
