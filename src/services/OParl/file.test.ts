import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importFile } from './file';

const helperFuncs = setupTestDataBase('test_file_import');

// TODO: change test url to something within our control, that uses all fields
const testUrl =
  'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/files.asp?dtyp=110&id=21740';

describe('importing a file', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importFile, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importFile));

  afterAll(helperFuncs.afterAll);
});
