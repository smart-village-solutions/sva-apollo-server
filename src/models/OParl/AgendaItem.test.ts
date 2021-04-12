import { AgendaItem, IAgendaItem } from './AgendaItem';

const maximalInput: IAgendaItem = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  name: 'n',
  auxiliaryFile: ['af1', 'af2', 'af3'],
  consultation: 'cons',
  created: new Date(),
  deleted: true,
  end: new Date(),
  meeting: 'meet',
  modified: new Date(),
  number: 'I.',
  public: true,
  resolutionFile: 'rf',
  resolutionText: 'rt',
  result: 'r',
  start: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
  order: 1,
};

const minimalInput: IAgendaItem = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
};

describe('creating an AgendaItem', () => {
  it('creates an AgendaItem with minimal input', async () => {
    const agendaItem = new AgendaItem(minimalInput);

    // check that the validation passes
    await expect(agendaItem.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(agendaItem).toHaveProperty('externalId', minimalInput.externalId);
    expect(agendaItem).toHaveProperty('type', minimalInput.type);
  });

  it('creates an AgendaItem with maximal input', async () => {
    const agendaItem = new AgendaItem(maximalInput);

    // check that the validation passes
    await expect(agendaItem.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(agendaItem).toHaveProperty('externalId', maximalInput.externalId);
    expect(agendaItem).toHaveProperty('type', maximalInput.type);
    expect(agendaItem).toHaveProperty('name', maximalInput.name);
    expect(agendaItem.auxiliaryFile).toHaveLength(3);
    expect(agendaItem.auxiliaryFile?.toString()).toEqual(
      maximalInput.auxiliaryFile?.toString(),
    );
    expect(agendaItem).toHaveProperty(
      'consultation',
      maximalInput.consultation,
    );
    expect(agendaItem).toHaveProperty('created', maximalInput.created);
    expect(agendaItem).toHaveProperty('deleted', maximalInput.deleted);
    expect(agendaItem).toHaveProperty('end', maximalInput.end);
    expect(agendaItem).toHaveProperty('meeting', maximalInput.meeting);
    expect(agendaItem).toHaveProperty('modified', maximalInput.modified);
    expect(agendaItem).toHaveProperty('number', maximalInput.number);
    expect(agendaItem).toHaveProperty('public', maximalInput.public);
    expect(agendaItem).toHaveProperty(
      'resolutionFile',
      maximalInput.resolutionFile,
    );
    expect(agendaItem).toHaveProperty(
      'resolutionText',
      maximalInput.resolutionText,
    );
    expect(agendaItem).toHaveProperty('result', maximalInput.result);
    expect(agendaItem).toHaveProperty('start', maximalInput.start);
    expect(agendaItem).toHaveProperty('web', maximalInput.web);
    expect(agendaItem.keyword).toHaveLength(2);
    expect(agendaItem.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(agendaItem).toHaveProperty('license', maximalInput.license);
    expect(agendaItem).toHaveProperty('order', maximalInput.order);
  });

  it('fails to validate after creating an AgendaItem without required values', async () => {
    const agendaItem = new AgendaItem({});

    await expect(agendaItem.validate()).rejects.toThrowError();
  });
});
