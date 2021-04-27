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
      new Date(1493596800000),
      new Date(1496188800000),
    ),
  );

  it(
    'imports properly for 1.1',
    basicImportTest(
      importBody,
      testUrl2,
      new Date(1464825600000),
      new Date(1469923200000),
    ),
  );

  it('import returns undefined on faulty url', invalidUrlTest(importBody));

  afterAll(async () => {
    await helperFuncs.afterAll();
    jest.setTimeout(5000);
  });
});
