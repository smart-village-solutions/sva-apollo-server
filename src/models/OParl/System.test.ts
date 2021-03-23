import { ISystem, System } from './System';

const maximalInput: ISystem = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  body: ['b1', 'b2'],
  oparlVersion: 'ov',
  contactEmail: 'ce',
  contactName: 'cn',
  license: 'l',
  name: 'n',
  otherOparlVersions: [],
  product: 'p',
  vendor: 'v',
  website: 'ws',
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
};

const minimalInput: ISystem = {
  externalId: 'eId',
  type: 't', // TODO: add proper type,
  body: ['b'],
  oparlVersion: 'ov',
};

describe('creating a System', () => {
  it('creates a System with minimal input', async () => {
    const system = new System(minimalInput);

    // check that the validation passes
    await expect(system.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(system).toHaveProperty('externalId', minimalInput.externalId);
    expect(system).toHaveProperty('type', minimalInput.type);
    expect(system.body).toHaveLength(1);
    expect(system.body?.toString()).toEqual(minimalInput.body?.toString());
  });

  it('creates a System with maximal input', async () => {
    const system = new System(maximalInput);

    // check that the validation passes
    await expect(system.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(system).toHaveProperty('externalId', maximalInput.externalId);
    expect(system).toHaveProperty('type', maximalInput.type);
    expect(system.body).toHaveLength(2);
    expect(system.body?.toString()).toEqual(maximalInput.body?.toString());
    expect(system).toHaveProperty('oparlVersion', maximalInput.oparlVersion);
    expect(system).toHaveProperty('contactEmail', maximalInput.contactEmail);
    expect(system).toHaveProperty('contactName', maximalInput.contactName);
    expect(system).toHaveProperty('license', maximalInput.license);
    expect(system).toHaveProperty('name', maximalInput.name);
    expect(system.otherOparlVersions).toHaveLength(0);
    expect(system.otherOparlVersions?.toString()).toEqual(
      maximalInput.otherOparlVersions?.toString(),
    );
    expect(system).toHaveProperty('product', maximalInput.product);
    expect(system).toHaveProperty('vendor', maximalInput.vendor);
    expect(system).toHaveProperty('website', maximalInput.website);

    expect(system).toHaveProperty('created', maximalInput.created);
    expect(system).toHaveProperty('deleted', maximalInput.deleted);
    expect(system).toHaveProperty('modified', maximalInput.modified);
    expect(system).toHaveProperty('web', maximalInput.web);
    expect(system.keyword).toHaveLength(2);
    expect(system.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
  });

  it('fails to validate after creating a Person without required values', async () => {
    const person = new System({});

    await expect(person.validate()).rejects.toThrowError();
  });
});
