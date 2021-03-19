import { Body } from './Body';

const bodyValues = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  name: 'n',
  organization: 'o',
  person: 'pe',
  meeting: 'm',
  paper: 'pa',
  legislativeTerm: ['lt1', 'lt2'],
};

describe('creating a Body', () => {
  it('creates a Body with minimal input', async () => {
    const body = new Body(bodyValues);

    // check that the validation passes
    await expect(body.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(body).toHaveProperty('externalId', bodyValues.externalId);
    expect(body).toHaveProperty('type', bodyValues.type);
    expect(body).toHaveProperty('name', bodyValues.name);
    expect(body).toHaveProperty('organization', bodyValues.organization);
    expect(body).toHaveProperty('person', bodyValues.person);
    expect(body).toHaveProperty('meeting', bodyValues.meeting);
    expect(body).toHaveProperty('paper', bodyValues.paper);
    expect(body.legislativeTerm).toHaveLength(2);
    expect(body.legislativeTerm.toString()).toEqual(
      bodyValues.legislativeTerm.toString(),
    );
  });

  it('fails to validate after creating a Body without required values', async () => {
    const body = new Body({});

    await expect(body.validate()).rejects.toThrowError();
  });
});
