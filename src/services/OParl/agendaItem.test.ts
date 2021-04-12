import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { importAgendaItem } from './agendaItem';

const helperFuncs = setupTestDataBase('test_agenda_item_import');

// TODO: change test url to something within our control, that uses all fields
const testUrl =
  'https://www.muenchen-transparent.de/oparl/v1.0/agendaitem/48823';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/agendaitem/1355';

describe('importing a agenda item', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly for 1.0', basicImportTest(importAgendaItem, testUrl));

  it('imports properly for 1.1', basicImportTest(importAgendaItem, testUrl2));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importAgendaItem),
  );

  afterAll(helperFuncs.afterAll);
});
