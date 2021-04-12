import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importConsultation } from './consultation';

const helperFuncs = setupTestDataBase('test_consultation_import');

// TODO: change test url to something within our control, that uses all fields
const testUrl =
  'https://www.muenchen-transparent.de/oparl/v1.0/consultation/48823';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/consultation/78';

describe('importing a consultation', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importConsultation, testUrl));

  it('imports properly for 1.1', basicImportTest(importConsultation, testUrl2));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importConsultation),
  );

  afterAll(helperFuncs.afterAll);
});
