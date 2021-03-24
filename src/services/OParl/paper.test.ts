import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importPaper } from './paper';

const helperFuncs = setupTestDataBase('test_paper_import');

// TODO: change test url to something within our control
const testUrl =
  'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/papers.asp?id=1198';

describe('importing a paper', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importPaper, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importPaper));

  afterAll(helperFuncs.afterAll);
});
