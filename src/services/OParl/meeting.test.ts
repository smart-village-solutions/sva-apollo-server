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
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/meeting/459';

describe('importing a meeting', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importMeeting, testUrl));

  it('imports properly for 1.1', basicImportTest(importMeeting, testUrl2));

  it('import returns undefined on faulty url', invalidUrlTest(importMeeting));

  afterAll(helperFuncs.afterAll);
});
