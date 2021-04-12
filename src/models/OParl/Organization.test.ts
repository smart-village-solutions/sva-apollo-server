import { IOrganization, Organization } from './Organization';

const maximalInput: IOrganization = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  body: 'b',
  classification: 'c',
  endDate: new Date(),
  externalBody: 'eb',
  location: 'l',
  meeting: ['m1', 'm2'],
  membership: ['me1'],
  name: 'n',
  organizationType: 'ot',
  post: ['p1', 'p2'],
  shortName: 'sn',
  startDate: new Date(),
  subOrganizationOf: 'soo',
  website: 'ws',
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  consultation: ['c1', 'c2'],
  license: 'l',
};

const minimalInput: IOrganization = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
};

describe('creating a Organization', () => {
  it('creates a Organization with minimal input', async () => {
    const organization = new Organization(minimalInput);

    // check that the validation passes
    await expect(organization.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(organization).toHaveProperty('externalId', minimalInput.externalId);
    expect(organization).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Organization with maximal input', async () => {
    const organization = new Organization(maximalInput);

    // check that the validation passes
    await expect(organization.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(organization).toHaveProperty('externalId', maximalInput.externalId);
    expect(organization).toHaveProperty('type', maximalInput.type);
    expect(organization).toHaveProperty('body', maximalInput.body);
    expect(organization).toHaveProperty(
      'classification',
      maximalInput.classification,
    );
    expect(organization).toHaveProperty('endDate', maximalInput.endDate);
    expect(organization).toHaveProperty(
      'externalBody',
      maximalInput.externalBody,
    );
    expect(organization).toHaveProperty('location', maximalInput.location);
    expect(organization.meeting).toHaveLength(2);
    expect(organization.meeting?.toString()).toEqual(
      maximalInput.meeting?.toString(),
    );
    expect(organization.membership).toHaveLength(1);
    expect(organization.membership?.toString()).toEqual(
      maximalInput.membership?.toString(),
    );
    expect(organization).toHaveProperty('name', maximalInput.name);
    expect(organization).toHaveProperty(
      'organizationType',
      maximalInput.organizationType,
    );
    expect(organization.post).toHaveLength(2);
    expect(organization.post?.toString()).toEqual(
      maximalInput.post?.toString(),
    );
    expect(organization).toHaveProperty('shortName', maximalInput.shortName);
    expect(organization).toHaveProperty('startDate', maximalInput.startDate);
    expect(organization).toHaveProperty(
      'subOrganizationOf',
      maximalInput.subOrganizationOf,
    );
    expect(organization).toHaveProperty('website', maximalInput.website);
    expect(organization).toHaveProperty('created', maximalInput.created);
    expect(organization).toHaveProperty('deleted', maximalInput.deleted);
    expect(organization).toHaveProperty('modified', maximalInput.modified);
    expect(organization).toHaveProperty('web', maximalInput.web);
    expect(organization.keyword).toHaveLength(2);
    expect(organization.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(organization.consultation).toHaveLength(2);
    expect(organization.consultation?.toString()).toEqual(
      maximalInput.consultation?.toString(),
    );
    expect(organization).toHaveProperty('license', maximalInput.license);
  });

  it('fails to validate after creating an Organization without required values', async () => {
    const organization = new Organization({});

    await expect(organization.validate()).rejects.toThrowError();
  });
});
