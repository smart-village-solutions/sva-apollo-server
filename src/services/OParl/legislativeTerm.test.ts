import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importLegislativeTerm } from './legislativeTerm';

const helperFuncs = setupTestDataBase('test_legislative_term_import');

// TODO: change test url to something within our control
const testUrl =
  'https://www.muenchen-transparent.de/oparl/v1.0/legislativeterm/0';

describe('importing a legislative term', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importLegislativeTerm, testUrl));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importLegislativeTerm),
  );

  afterAll(helperFuncs.afterAll);
});
