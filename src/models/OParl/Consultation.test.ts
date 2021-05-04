import { Consultation, IConsultation } from './Consultation';

const maximalInput: IConsultation = {
  externalId: 'eId',
  type: 't',
  agendaItem: 'ai',
  authoritative: true,
  organization: ['o1', 'o2'],
  paper: 'pa',
  role: 'r',
  created: new Date(),
  deleted: true,
  meeting: 'meet',
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
};

const minimalInput: IConsultation = {
  externalId: 'eId',
  type: 't',
};

describe('creating a Consultation', () => {
  it('creates a Consultation with minimal input', async () => {
    const consultation = new Consultation(minimalInput);

    // check that the validation passes
    await expect(consultation.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(consultation).toHaveProperty('externalId', minimalInput.externalId);
    expect(consultation).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Consultation with maximal input', async () => {
    const consultation = new Consultation(maximalInput);

    // check that the validation passes
    await expect(consultation.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(consultation).toHaveProperty('externalId', maximalInput.externalId);
    expect(consultation).toHaveProperty('type', maximalInput.type);
    expect(consultation).toHaveProperty('agendaItem', maximalInput.agendaItem);
    expect(consultation).toHaveProperty(
      'authoritative',
      maximalInput.authoritative,
    );
    expect(consultation.organization).toHaveLength(2);
    expect(consultation.organization?.toString()).toEqual(
      maximalInput.organization?.toString(),
    );
    expect(consultation).toHaveProperty('paper', maximalInput.paper);
    expect(consultation).toHaveProperty('role', maximalInput.role);
    expect(consultation).toHaveProperty('created', maximalInput.created);
    expect(consultation).toHaveProperty('deleted', maximalInput.deleted);
    expect(consultation).toHaveProperty('meeting', maximalInput.meeting);
    expect(consultation).toHaveProperty('modified', maximalInput.modified);
    expect(consultation).toHaveProperty('web', maximalInput.web);
    expect(consultation.keyword).toHaveLength(2);
    expect(consultation.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(consultation).toHaveProperty('license', maximalInput.license);
  });

  it('fails to validate after creating a Consultation without required values', async () => {
    const consultation = new Consultation({});

    await expect(consultation.validate()).rejects.toThrowError();
  });
});
