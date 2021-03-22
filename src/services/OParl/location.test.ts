import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importLocation } from './location';

const helperFuncs = setupTestDataBase('test_location_import');

// TODO: change test url to something within our control
const testUrl =
  'https://ris.schwalmtal.de/webservice/oparl/v1.0/body/1/location/1-7';

describe('importing a location term', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importLocation, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importLocation));

  afterAll(helperFuncs.afterAll);
});
