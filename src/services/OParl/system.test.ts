import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importSystem } from './system';

const helperFuncs = setupTestDataBase('test_system_import');

// TODO: change test url to something within our control
const testUrl = 'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/system.asp';

describe('importing a system', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importSystem, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importSystem));

  afterAll(helperFuncs.afterAll);
});
