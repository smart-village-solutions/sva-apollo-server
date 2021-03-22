import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importFile } from './file';

const helperFuncs = setupTestDataBase('test_file_import');

// TODO: change test url to something within our control, that uses all fields
const testUrl =
  'https://ris.schwalmtal.de/webservice/oparl/v1.0/body/1/file/1-4';

describe('importing a file', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importFile, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importFile));

  afterAll(helperFuncs.afterAll);
});
