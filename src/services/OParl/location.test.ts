import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importLocation } from './location';

const helperFuncs = setupTestDataBase('test_location_import');

// TODO: change test url to something within our control
const testUrl =
  'https://ris.schwalmtal.de/webservice/oparl/v1.0/body/1/location/1-7';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/location/1-15';

describe('importing a location', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importLocation, testUrl));

  it('imports properly for 1.1', basicImportTest(importLocation, testUrl2));

  it('import returns undefined on faulty url', invalidUrlTest(importLocation));

  afterAll(helperFuncs.afterAll);
});
