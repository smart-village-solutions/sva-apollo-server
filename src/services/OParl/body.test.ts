import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importBody } from './body';

const helperFuncs = setupTestDataBase('test_body_import');

// TODO: change test url to something within our control
const testUrl = 'https://www.muenchen-transparent.de/oparl/v1.0/body/0';

describe('importing a body', () => {
  beforeAll(helperFuncs.beforeAll);

  it(
    'imports properly',
    basicImportTest(
      importBody,
      testUrl,
      new Date('2016-06-01T00:00:00.000Z'),
      new Date('2018-05-31T00:00:00.000Z'),
    ),
  );

  it('import returns undefined on faulty url', invalidUrlTest(importBody));

  afterAll(helperFuncs.afterAll);
});
