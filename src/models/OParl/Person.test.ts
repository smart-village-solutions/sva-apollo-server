import { IPerson, Person } from './Person';

const maximalInput: IPerson = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  affix: 'af',
  body: 'b1',
  email: ['em'],
  familyName: 'fn',
  formOfAddress: 'foa',
  gender: 'g',
  givenName: 'gn',
  life: 'l',
  lifeSource: 'ls',
  location: 'lo',
  membership: ['me1', 'me2'],
  name: 'n',
  phone: ['p1', 'p2'],
  status: ['s1', 's2'],
  title: ['t1', 't2', 't3'],
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
};

const minimalInput: IPerson = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
};

describe('creating a Person', () => {
  it('creates a Person with minimal input', async () => {
    const person = new Person(minimalInput);

    // check that the validation passes
    await expect(person.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(person).toHaveProperty('externalId', minimalInput.externalId);
    expect(person).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Person with maximal input', async () => {
    const person = new Person(maximalInput);

    // check that the validation passes
    await expect(person.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(person).toHaveProperty('externalId', maximalInput.externalId);
    expect(person).toHaveProperty('type', maximalInput.type);
    expect(person).toHaveProperty('affix', maximalInput.affix);
    expect(person).toHaveProperty('body', maximalInput.body);
    expect(person.email).toHaveLength(1);
    expect(person.email?.toString()).toEqual(maximalInput.email?.toString());
    expect(person).toHaveProperty('familyName', maximalInput.familyName);
    expect(person).toHaveProperty('formOfAddress', maximalInput.formOfAddress);
    expect(person).toHaveProperty('gender', maximalInput.gender);
    expect(person).toHaveProperty('givenName', maximalInput.givenName);
    expect(person).toHaveProperty('life', maximalInput.life);
    expect(person).toHaveProperty('life', maximalInput.life);
    expect(person).toHaveProperty('lifeSource', maximalInput.lifeSource);
    expect(person).toHaveProperty('location', maximalInput.location);
    expect(person.membership).toHaveLength(2);
    expect(person.membership?.toString()).toEqual(
      maximalInput.membership?.toString(),
    );
    expect(person).toHaveProperty('name', maximalInput.name);
    expect(person.phone).toHaveLength(2);
    expect(person.phone?.toString()).toEqual(maximalInput.phone?.toString());
    expect(person.status).toHaveLength(2);
    expect(person.status?.toString()).toEqual(maximalInput.status?.toString());
    expect(person.title).toHaveLength(3);
    expect(person.title?.toString()).toEqual(maximalInput.title?.toString());
    expect(person).toHaveProperty('created', maximalInput.created);
    expect(person).toHaveProperty('deleted', maximalInput.deleted);
    expect(person).toHaveProperty('modified', maximalInput.modified);
    expect(person).toHaveProperty('web', maximalInput.web);
    expect(person.keyword).toHaveLength(2);
    expect(person.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(person).toHaveProperty('license', maximalInput.license);
  });

  it('fails to validate after creating a Person without required values', async () => {
    const person = new Person({});

    await expect(person.validate()).rejects.toThrowError();
  });
});
