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

describe('importing a consultation', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importConsultation, testUrl));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importConsultation),
  );

  afterAll(helperFuncs.afterAll);
});
