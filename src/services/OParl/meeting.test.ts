import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importMeeting } from './meeting';

const helperFuncs = setupTestDataBase('test_meeting_import');

// TODO: change test url to something within our control
const testUrl =
  'https://ris.schwalmtal.de/webservice/oparl/v1.0/body/1/meeting/503';

describe('importing a meeting', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importMeeting, testUrl));

  it('import returns undefined on faulty url', invalidUrlTest(importMeeting));

  afterAll(helperFuncs.afterAll);
});
