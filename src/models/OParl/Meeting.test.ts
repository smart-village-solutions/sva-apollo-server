import { IMeeting, Meeting } from './Meeting';

const maximalInput: IMeeting = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  agendaItem: ['a1', 'a2'],
  auxiliaryFile: ['f1', 'f2'],
  cancelled: false,
  end: new Date(),
  invitation: 'i',
  location: 'l',
  meetingState: 'ms',
  name: 'n',
  organization: ['o1', 'o2'],
  participant: [],
  resultsProtocol: 'rp',
  start: new Date(),
  verbatimProtocol: 'vp',
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
};

const minimalInput: IMeeting = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
};

describe('creating a Meeting', () => {
  it('creates a Meeting with minimal input', async () => {
    const meeting = new Meeting(minimalInput);

    // check that the validation passes
    await expect(meeting.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(meeting).toHaveProperty('externalId', minimalInput.externalId);
    expect(meeting).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Meeting with maximal input', async () => {
    const meeting = new Meeting(maximalInput);

    // check that the validation passes
    await expect(meeting.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(meeting).toHaveProperty('externalId', maximalInput.externalId);
    expect(meeting).toHaveProperty('type', maximalInput.type);
    expect(meeting.agendaItem).toHaveLength(2);
    expect(meeting.agendaItem?.toString()).toEqual(
      maximalInput.agendaItem?.toString(),
    );
    expect(meeting.auxiliaryFile).toHaveLength(2);
    expect(meeting.auxiliaryFile?.toString()).toEqual(
      maximalInput.auxiliaryFile?.toString(),
    );
    expect(meeting).toHaveProperty('cancelled', maximalInput.cancelled);
    expect(meeting).toHaveProperty('end', maximalInput.end);
    expect(meeting).toHaveProperty('invitation', maximalInput.invitation);
    expect(meeting).toHaveProperty('location', maximalInput.location);
    expect(meeting).toHaveProperty('meetingState', maximalInput.meetingState);
    expect(meeting).toHaveProperty('name', maximalInput.name);
    expect(meeting.organization).toHaveLength(2);
    expect(meeting.organization?.toString()).toEqual(
      maximalInput.organization?.toString(),
    );
    expect(meeting.participant).toHaveLength(0);
    expect(meeting.participant?.toString()).toEqual(
      maximalInput.participant?.toString(),
    );
    expect(meeting).toHaveProperty(
      'resultsProtocol',
      maximalInput.resultsProtocol,
    );
    expect(meeting).toHaveProperty('start', maximalInput.start);
    expect(meeting).toHaveProperty(
      'verbatimProtocol',
      maximalInput.verbatimProtocol,
    );
    expect(meeting).toHaveProperty('created', maximalInput.created);
    expect(meeting).toHaveProperty('deleted', maximalInput.deleted);
    expect(meeting).toHaveProperty('modified', maximalInput.modified);
    expect(meeting).toHaveProperty('web', maximalInput.web);
    expect(meeting.keyword).toHaveLength(2);
    expect(meeting.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
  });

  it('fails to validate after creating an Meeting without required values', async () => {
    const meeting = new Meeting({});

    await expect(meeting.validate()).rejects.toThrowError();
  });
});
