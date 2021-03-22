import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importMembership } from './membership';

const helperFuncs = setupTestDataBase('test_membership_import');

// TODO: change test url to something within our control
const testUrl =
  'https://ris.schwalmtal.de/webservice/oparl/v1.0/body/1/membership/1-2-115-13';

describe('importing a meeting', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importMembership, testUrl));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importMembership),
  );

  afterAll(helperFuncs.afterAll);
});
