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

describe('importing an organization', () => {
  beforeAll(helperFuncs.beforeAll);

  it(
    'imports properly',
    basicImportTest(
      importOrganization,
      testUrl,
      new Date('2017-06-01'),
      new Date('2018-06-01'),
    ),
  );

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importOrganization),
  );

  afterAll(helperFuncs.afterAll);
});
