import { ILegislativeTerm, LegislativeTerm } from './LegislativeTerm';

const maximalInput: ILegislativeTerm = {
  externalId: 'eId',
  type: 't',
  name: 'n',
  body: 'b',
  startDate: new Date(),
  endDate: new Date(),
  keyword: ['first', 'second'],
  created: new Date(),
  deleted: false,
  license: 'l',
  modified: new Date(),
  web: 'w',
};
const minimalInput: ILegislativeTerm = {
  externalId: 'eId',
  type: 't',
};

describe('creating a LegislativeTerm', () => {
  it('creates a LegislativeTerm with minimal input', async () => {
    const legislativeTerm = new LegislativeTerm(minimalInput);

    // check that the validation passes
    await expect(legislativeTerm.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(legislativeTerm).toHaveProperty(
      'externalId',
      minimalInput.externalId,
    );
    expect(legislativeTerm).toHaveProperty('type', minimalInput.type);
  });

  it('creates a LegislativeTerm with maximal input', async () => {
    const legislativeTerm = new LegislativeTerm(maximalInput);

    // check that the validation passes
    await expect(legislativeTerm.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(legislativeTerm).toHaveProperty(
      'externalId',
      maximalInput.externalId,
    );
    expect(legislativeTerm).toHaveProperty('type', maximalInput.type);
    expect(legislativeTerm).toHaveProperty('name', maximalInput.name);
    expect(legislativeTerm).toHaveProperty('startDate', maximalInput.startDate);
    expect(legislativeTerm).toHaveProperty('endDate', maximalInput.endDate);
    expect(legislativeTerm.keyword).toHaveLength(2);
    expect(legislativeTerm.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(legislativeTerm).toHaveProperty('created', maximalInput.created);
    expect(legislativeTerm).toHaveProperty('deleted', maximalInput.deleted);
    expect(legislativeTerm).toHaveProperty('license', maximalInput.license);
    expect(legislativeTerm).toHaveProperty('modified', maximalInput.modified);
    expect(legislativeTerm).toHaveProperty('web', maximalInput.web);
  });

  it('fails to validate after creating a LegislativeTerm without required values', async () => {
    const legislativeTerm = new LegislativeTerm({});

    await expect(legislativeTerm.validate()).rejects.toThrowError();
  });
});
