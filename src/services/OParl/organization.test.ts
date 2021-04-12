import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importOrganization } from './organization';

const helperFuncs = setupTestDataBase('test_organization_import');

// TODO: change test url to something within our control
const testUrl =
  'https://oparl.politik-bei-uns.de/organization/5a73013bf24bb7ed5127a7df';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/organization/1-3';

describe('importing an organization', () => {
  beforeAll(helperFuncs.beforeAll);

  it(
    'imports properly for 1.0',
    basicImportTest(
      importOrganization,
      testUrl,
      new Date('2017-06-01'),
      new Date('2018-06-01'),
    ),
  );

  it('imports properly for 1.1', basicImportTest(importOrganization, testUrl2));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importOrganization),
  );

  afterAll(helperFuncs.afterAll);
});
