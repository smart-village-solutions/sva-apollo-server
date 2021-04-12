import { File, IFile } from './File';

const maximalInput: IFile = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  accessUrl: 'au',
  agendaItem: ['ai1', 'ai2'],
  date: new Date(),
  derivativeFile: ['df1'],
  downloadUrl: 'du',
  externalServiceUrl: 'esu',
  fileLicense: 'fl',
  fileName: 'fn',
  masterFile: 'mf',
  meeting: ['me1', 'me2'],
  mimeType: 'mt',
  name: 'n',
  paper: ['pa1', 'pa2'],
  sha1Checksum: 'sc',
  size: 12,
  text: 't',
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
  sha512Checksum: 'sc512',
};

const minimalInput: IFile = {
  externalId: 'eId',
  type: 't', // TODO: add proper type
  accessUrl: 'au',
};

describe('creating a File', () => {
  it('creates a File with minimal input', async () => {
    const file = new File(minimalInput);

    // check that the validation passes
    await expect(file.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(file).toHaveProperty('externalId', minimalInput.externalId);
    expect(file).toHaveProperty('type', minimalInput.type);
    expect(file).toHaveProperty('accessUrl', minimalInput.accessUrl);
  });

  it('creates a File with maximal input', async () => {
    const file = new File(maximalInput);

    // check that the validation passes
    await expect(file.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(file).toHaveProperty('externalId', maximalInput.externalId);
    expect(file).toHaveProperty('type', maximalInput.type);
    expect(file).toHaveProperty('accessUrl', maximalInput.accessUrl);
    expect(file.agendaItem).toHaveLength(2);
    expect(file.agendaItem?.toString()).toEqual(
      maximalInput.agendaItem?.toString(),
    );
    expect(file).toHaveProperty('date', maximalInput.date);
    expect(file.derivativeFile).toHaveLength(1);
    expect(file.derivativeFile?.toString()).toEqual(
      maximalInput.derivativeFile?.toString(),
    );
    expect(file).toHaveProperty('downloadUrl', maximalInput.downloadUrl);
    expect(file).toHaveProperty(
      'externalServiceUrl',
      maximalInput.externalServiceUrl,
    );
    expect(file).toHaveProperty('fileLicense', maximalInput.fileLicense);
    expect(file).toHaveProperty('fileName', maximalInput.fileName);
    expect(file).toHaveProperty('masterFile', maximalInput.masterFile);
    expect(file.meeting).toHaveLength(2);
    expect(file.meeting?.toString()).toEqual(maximalInput.meeting?.toString());
    expect(file).toHaveProperty('mimeType', maximalInput.mimeType);
    expect(file).toHaveProperty('name', maximalInput.name);
    expect(file.paper).toHaveLength(2);
    expect(file.paper?.toString()).toEqual(maximalInput.paper?.toString());
    expect(file).toHaveProperty('sha1Checksum', maximalInput.sha1Checksum);
    expect(file).toHaveProperty('size', maximalInput.size);
    expect(file).toHaveProperty('text', maximalInput.text);
    expect(file).toHaveProperty('created', maximalInput.created);
    expect(file).toHaveProperty('deleted', maximalInput.deleted);
    expect(file).toHaveProperty('modified', maximalInput.modified);
    expect(file).toHaveProperty('web', maximalInput.web);
    expect(file.keyword).toHaveLength(2);
    expect(file.keyword?.toString()).toEqual(maximalInput.keyword?.toString());
    expect(file).toHaveProperty('license', maximalInput.license);
    expect(file).toHaveProperty('sha512Checksum', maximalInput.sha512Checksum);
  });

  it('fails to validate after creating a File without required values', async () => {
    const file = new File({});

    await expect(file.validate()).rejects.toThrowError();
  });
});
