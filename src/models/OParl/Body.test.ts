import { Body, IBody } from './Body';

const maximalInput: IBody = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  name: 'n',
  organization: ['o1', 'o2'],
  person: ['pe'],
  meeting: ['m1', 'm2', 'm3'],
  paper: ['pa1', 'pa2'],
  legislativeTerm: ['lt1', 'lt2'],
  ags: 'ags',
  classification: 'c',
  contactEmail: 'ce',
  contactName: 'cn',
  created: new Date(),
  deleted: true,
  equivalent: ['e1', 'e2'],
  keyword: ['k1', 'k2'],
  license: 'li',
  licenseValidSince: new Date(),
  location: 'lo',
  modified: new Date(),
  oparlSince: new Date(),
  rgs: 'rgs',
  web: 'w',
  website: 'ws',
};

const minimalInput: IBody = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  name: 'n',
  organization: ['o1', 'o2'],
  person: ['pe'],
  meeting: ['m1', 'm2', 'm3'],
  paper: ['pa1', 'pa2'],
  legislativeTerm: ['lt1', 'lt2'],
};

describe('creating a Body', () => {
  it('creates a Body with minimal input', async () => {
    const body = new Body(minimalInput);

    // check that the validation passes
    await expect(body.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(body).toHaveProperty('externalId', minimalInput.externalId);
    expect(body).toHaveProperty('type', minimalInput.type);
    expect(body).toHaveProperty('name', minimalInput.name);
    expect(body.organization).toHaveLength(2);
    expect(body.organization.toString()).toEqual(
      minimalInput.organization.toString(),
    );
    expect(body.person).toHaveLength(1);
    expect(body.person.toString()).toEqual(minimalInput.person.toString());
    expect(body.meeting).toHaveLength(3);
    expect(body.meeting.toString()).toEqual(minimalInput.meeting.toString());
    expect(body.paper).toHaveLength(2);
    expect(body.paper.toString()).toEqual(minimalInput.paper.toString());
    expect(body.legislativeTerm).toHaveLength(2);
    expect(body.legislativeTerm.toString()).toEqual(
      minimalInput.legislativeTerm.toString(),
    );
  });

  it('creates a Body with maximal input', async () => {
    const body = new Body(maximalInput);

    // check that the validation passes
    await expect(body.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(body).toHaveProperty('externalId', maximalInput.externalId);
    expect(body).toHaveProperty('type', maximalInput.type);
    expect(body).toHaveProperty('name', maximalInput.name);
    expect(body.organization).toHaveLength(2);
    expect(body.organization.toString()).toEqual(
      maximalInput.organization.toString(),
    );
    expect(body.person).toHaveLength(1);
    expect(body.person.toString()).toEqual(maximalInput.person.toString());
    expect(body.meeting).toHaveLength(3);
    expect(body.meeting.toString()).toEqual(maximalInput.meeting.toString());
    expect(body.paper).toHaveLength(2);
    expect(body.paper.toString()).toEqual(maximalInput.paper.toString());
    expect(body.legislativeTerm).toHaveLength(2);
    expect(body.legislativeTerm.toString()).toEqual(
      maximalInput.legislativeTerm.toString(),
    );
    expect(body).toHaveProperty('ags', maximalInput.ags);
    expect(body).toHaveProperty('classification', maximalInput.classification);
    expect(body).toHaveProperty('contactEmail', maximalInput.contactEmail);
    expect(body).toHaveProperty('contactName', maximalInput.contactName);
    expect(body).toHaveProperty('created', maximalInput.created);
    expect(body).toHaveProperty('deleted', maximalInput.deleted);
    expect(body.equivalent).toHaveLength(2);
    expect(body.equivalent?.toString()).toEqual(
      maximalInput.equivalent?.toString(),
    );
    expect(body.keyword).toHaveLength(2);
    expect(body.keyword?.toString()).toEqual(maximalInput.keyword?.toString());
    expect(body).toHaveProperty('license', maximalInput.license);
    expect(body).toHaveProperty(
      'licenseValidSince',
      maximalInput.licenseValidSince,
    );
    expect(body).toHaveProperty('location', maximalInput.location);
    expect(body).toHaveProperty('modified', maximalInput.modified);
    expect(body).toHaveProperty('oparlSince', maximalInput.oparlSince);
    expect(body).toHaveProperty('rgs', maximalInput.rgs);
    expect(body).toHaveProperty('web', maximalInput.web);
    expect(body).toHaveProperty('website', maximalInput.website);
  });

  it('fails to validate after creating a Body without required values', async () => {
    const consultation = new Body({});

    await expect(consultation.validate()).rejects.toThrowError();
  });
});
