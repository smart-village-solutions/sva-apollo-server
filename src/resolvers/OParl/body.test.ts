import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { importBody } from '../../services/OParl/body';

const mongod = new MongoMemoryServer();

const databaseName = 'test_body_resolver';

// TODO: change test url to something within our control
const testUrl = 'https://www.muenchen-transparent.de/oparl/v1.0/body/0';

describe('importing a body', () => {
  beforeAll(async () => {
    const uri = await mongod.getUri(databaseName);

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    });
  });

  it('imports properly', async () => {
    const body = await importBody(testUrl);
    expect(body).toBeDefined();
    const json = body?.toJSON();
    delete json?._id;
    expect(json).toMatchSnapshot();
  });

  it('import returns undefined on faulty url', async () => {
    const body = await importBody(
      'https://smart-village.solutions/smart-village-solutions/',
    );
    expect(body).toBeUndefined();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    mongod.stop();
  });
});
