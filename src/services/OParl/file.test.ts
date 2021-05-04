import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importFile } from './file';

const helperFuncs = setupTestDataBase('test_file_import');

// TODO: change test url to something within our control, that uses all fields
const testUrl =
  'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/files.asp?dtyp=110&id=21740';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/file/1-1285';

describe('importing a file', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importFile, testUrl));

  it('imports properly for 1.1', basicImportTest(importFile, testUrl2));

  it('import returns undefined on faulty url', invalidUrlTest(importFile));

  afterAll(helperFuncs.afterAll);
});
