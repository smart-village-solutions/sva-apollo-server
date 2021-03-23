import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importPerson } from './person';

const helperFuncs = setupTestDataBase('test_person_import');

// TODO: change test url to something within our control
const testUrl =
  'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/persons.asp?typ=sb&id=442';

describe('importing a person', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importPerson, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importPerson));

  afterAll(helperFuncs.afterAll);
});
