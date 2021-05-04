import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importSystem } from './system';

const helperFuncs = setupTestDataBase('test_system_import');

// TODO: change test url to something within our control
const testUrl = 'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/system.asp';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/system';

describe('importing a system', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importSystem, testUrl));
  it('imports properly for 1.1', basicImportTest(importSystem, testUrl2));

  it('import returns undefined on faulty url', invalidUrlTest(importSystem));

  afterAll(helperFuncs.afterAll);
});
