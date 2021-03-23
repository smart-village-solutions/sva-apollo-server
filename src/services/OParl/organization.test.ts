import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importOrganization } from './organization';

const helperFuncs = setupTestDataBase('test_organization_import');

// TODO: change test url to something within our control
const testUrl =
  'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/organizations.asp?typ=gr&id=40';

describe('importing an organization', () => {
  beforeAll(async () => {
    await helperFuncs.beforeAll();
    jest.setTimeout(20000);
  });

  it('imports properly', basicImportTest(importOrganization, testUrl));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importOrganization),
  );

  afterAll(async () => {
    helperFuncs.afterAll();
    jest.setTimeout(5000);
  });
});
