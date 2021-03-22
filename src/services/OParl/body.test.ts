import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importBody } from '../OParl/body';

const helperFuncs = setupTestDataBase('test_body_import');

// TODO: change test url to something within our control
const testUrl = 'https://www.muenchen-transparent.de/oparl/v1.0/body/0';

describe('importing a body', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importBody, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importBody));

  afterAll(helperFuncs.afterAll);
});
