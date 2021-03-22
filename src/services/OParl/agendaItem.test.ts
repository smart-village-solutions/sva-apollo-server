import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../testHelpers';
import { importAgendaItem } from './agendaItem';

const helperFuncs = setupTestDataBase('test_agenda_item_import');

// TODO: change test url to something within our control, that uses all fields
const testUrl =
  'https://www.muenchen-transparent.de/oparl/v1.0/agendaitem/48823';

describe('importing a agenda item', () => {
  beforeAll(helperFuncs.beforeAll);

  it('imports properly', basicImportTest(importAgendaItem, testUrl));

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importAgendaItem),
  );

  afterAll(helperFuncs.afterAll);
});
