import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importMembership } from './membership';

const helperFuncs = setupTestDataBase('test_membership_import');

// TODO: change test url to something within our control
const testUrl =
  'https://ris.schwalmtal.de/webservice/oparl/v1.0/body/1/membership/1-2-115-13';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/membership/1-1-7-53';

describe('importing a meeting', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importMembership, testUrl));

  it('imports properly for 1.1', basicImportTest(importMembership, testUrl2));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importMembership),
  );

  afterAll(helperFuncs.afterAll);
});
