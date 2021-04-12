import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importBody } from './body';

const helperFuncs = setupTestDataBase('test_body_import');

// TODO: change test url to something within our control
const testUrl =
  'https://oparl.politik-bei-uns.de/body/5a73013af24bb7ed5127a72a';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1';

describe('importing a body', () => {
  beforeAll(async () => {
    await helperFuncs.beforeAll();
    jest.setTimeout(30000);
  });

  it(
    'imports properly for 1.0',
    basicImportTest(
      importBody,
      testUrl,
      new Date('2017-05-01'),
      new Date('2017-05-31'),
    ),
  );

  it(
    'imports properly for 1.1',
    basicImportTest(
      importBody,
      testUrl2,
      new Date('2016-06-02'),
      new Date('2016-07-31'),
    ),
  );

  it('import returns undefined on faulty url', invalidUrlTest(importBody));

  afterAll(async () => {
    await helperFuncs.afterAll();
    jest.setTimeout(5000);
  });
});
