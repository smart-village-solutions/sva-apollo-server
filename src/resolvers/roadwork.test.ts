import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { createRoadwork, findRoadwork } from './roadwork';

const mongod = new MongoMemoryServer();

const databaseName = 'test_roadwork';

const name = 'name1';
const description = 'description1';

describe('testing roadwork', () => {
  beforeAll(async () => {
    const uri = await mongod.getUri(databaseName);

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    });
  });

  it('creates a roadwork database object', async () => {
    const result = await createRoadwork(null, {
      name,
      description,
    });

    expect(result.name).toEqual(name);
    expect(result.description).toEqual(description);
  });

  it('finds the previously created roadwork', async () => {
    const result = await findRoadwork();
    expect(result).toHaveLength(1);
    expect(result[0]?.name).toEqual(name);
    expect(result[0]?.description).toEqual(description);
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    mongod.stop();
  });
});
