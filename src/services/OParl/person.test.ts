import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importPerson } from './person';

const helperFuncs = setupTestDataBase('test_person_import');

// TODO: change test url to something within our control
const testUrl =
  'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/persons.asp?typ=sb&id=442';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/person/32';

describe('importing a person', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importPerson, testUrl));

  it('imports properly for 1.1', basicImportTest(importPerson, testUrl2));

  it('import returns undefined on faulty url', invalidUrlTest(importPerson));

  afterAll(helperFuncs.afterAll);
});
