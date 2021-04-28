import { IMembership, Membership } from './Membership';

const maximalInput: IMembership = {
  externalId: 'eId',
  type: 't',
  endDate: new Date(),
  onBehalfOf: 'obo',
  organization: 'o',
  person: 'p',
  role: 'r',
  startDate: new Date(),
  votingRight: false,
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
};

const minimalInput: IMembership = {
  externalId: 'eId',
  type: 't',
};

describe('creating a Membership', () => {
  it('creates a Membership with minimal input', async () => {
    const membership = new Membership(minimalInput);

    // check that the validation passes
    await expect(membership.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(membership).toHaveProperty('externalId', minimalInput.externalId);
    expect(membership).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Membership with maximal input', async () => {
    const membership = new Membership(maximalInput);

    // check that the validation passes
    await expect(membership.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(membership).toHaveProperty('externalId', maximalInput.externalId);
    expect(membership).toHaveProperty('type', maximalInput.type);
    expect(membership).toHaveProperty('endDate', maximalInput.endDate);
    expect(membership).toHaveProperty('onBehalfOf', maximalInput.onBehalfOf);
    expect(membership).toHaveProperty(
      'organization',
      maximalInput.organization,
    );
    expect(membership).toHaveProperty('person', maximalInput.person);
    expect(membership).toHaveProperty('role', maximalInput.role);
    expect(membership).toHaveProperty('startDate', maximalInput.startDate);
    expect(membership).toHaveProperty('votingRight', maximalInput.votingRight);
    expect(membership).toHaveProperty('created', maximalInput.created);
    expect(membership).toHaveProperty('deleted', maximalInput.deleted);
    expect(membership).toHaveProperty('modified', maximalInput.modified);
    expect(membership).toHaveProperty('web', maximalInput.web);
    expect(membership.keyword).toHaveLength(2);
    expect(membership.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(membership).toHaveProperty('license', maximalInput.license);
  });

  it('fails to validate after creating a Membership without required values', async () => {
    const membership = new Membership({});

    await expect(membership.validate()).rejects.toThrowError();
  });
});
