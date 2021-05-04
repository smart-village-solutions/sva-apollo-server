import {
  basicImportTest,
  invalidUrlTest,
  setupTestDataBase,
} from '../../helpers';
import { LegislativeTerm } from '../../models';
import { parseLegislativeTerm } from '../../parser';
import { updateOrCreateEntry } from './importHelpers';
import { importLegislativeTerm } from './legislativeTerm';

const helperFuncs = setupTestDataBase('test_legislative_term_import');

const testEID = 'testEID';
const testType = 'testType';
const testBody = 'testBdo';
// TODO: change test url to something within our control
const testUrl =
  'https://www.muenchen-transparent.de/oparl/v1.0/legislativeterm/0';
const testUrl2 =
  'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/legislativeterm/468';

describe('importing a legislative term', () => {
  beforeAll(helperFuncs.beforeAll);

  it(
    'imports properly for 1.0',
    basicImportTest(importLegislativeTerm, testUrl),
  );

  it(
    'imports properly for 1.1',
    basicImportTest(importLegislativeTerm, testUrl2),
  );

  it(
    'import returns undefined on faulty url',
    invalidUrlTest(importLegislativeTerm),
  );

  it('does create a new entry when updating with a new externalId', async () => {
    await updateOrCreateEntry(
      { id: testEID, type: testType },
      parseLegislativeTerm,
      LegislativeTerm,
    );

    expect(
      await LegislativeTerm.findOne({ externalId: testEID }),
    ).toHaveProperty('type', testType);
  });

  it('does update the entry when updating with an existing externalId', async () => {
    const oldId = (await LegislativeTerm.findOne({ externalId: testEID }))?.id;

    await updateOrCreateEntry(
      { id: testEID, type: testType, body: testBody },
      parseLegislativeTerm,
      LegislativeTerm,
    );

    expect(
      await LegislativeTerm.findOne({ externalId: testEID }),
    ).toHaveProperty('id', oldId);

    expect(
      await LegislativeTerm.findOne({ externalId: testEID }),
    ).toHaveProperty('body', testBody);
  });

  afterAll(helperFuncs.afterAll);
});
