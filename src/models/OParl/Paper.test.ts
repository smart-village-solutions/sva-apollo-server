import { IPaper, Paper } from './Paper';

const maximalInput: IPaper = {
  externalId: 'eId',
  type: 't',
  auxiliaryFile: ['a1', 'a2'],
  body: 'b',
  consultation: ['c1'],
  date: new Date(),
  location: ['l1', 'l2'],
  mainFile: 'mf',
  name: 'n',
  originatorOrganization: ['oo1'],
  originatorPerson: ['op1'],
  paperType: 'pt',
  reference: 'r',
  relatedPaper: ['rp1', 'rp2'],
  subordinatedPaper: ['sp1', 'sp2', 'sp3'],
  superordinatedPaper: ['sup1'],
  underDirectionOf: ['d1', 'd2'],
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
};

const minimalInput: IPaper = {
  externalId: 'eId',
  type: 't',
};

describe('creating a Paper', () => {
  it('creates a Paper with minimal input', async () => {
    const paper = new Paper(minimalInput);

    // check that the validation passes
    await expect(paper.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(paper).toHaveProperty('externalId', minimalInput.externalId);
    expect(paper).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Paper with maximal input', async () => {
    const paper = new Paper(maximalInput);

    // check that the validation passes
    await expect(paper.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(paper).toHaveProperty('externalId', maximalInput.externalId);
    expect(paper).toHaveProperty('type', maximalInput.type);
    expect(paper.auxiliaryFile).toHaveLength(2);
    expect(paper.auxiliaryFile?.toString()).toEqual(
      maximalInput.auxiliaryFile?.toString(),
    );
    expect(paper).toHaveProperty('body', maximalInput.body);
    expect(paper.consultation).toHaveLength(1);
    expect(paper.consultation?.toString()).toEqual(
      maximalInput.consultation?.toString(),
    );
    expect(paper).toHaveProperty('date', maximalInput.date);
    expect(paper.location).toHaveLength(2);
    expect(paper.location?.toString()).toEqual(
      maximalInput.location?.toString(),
    );
    expect(paper).toHaveProperty('mainFile', maximalInput.mainFile);
    expect(paper).toHaveProperty('name', maximalInput.name);
    expect(paper.originatorOrganization).toHaveLength(1);
    expect(paper.originatorOrganization?.toString()).toEqual(
      maximalInput.originatorOrganization?.toString(),
    );
    expect(paper.originatorPerson).toHaveLength(1);
    expect(paper.originatorPerson?.toString()).toEqual(
      maximalInput.originatorPerson?.toString(),
    );
    expect(paper).toHaveProperty('paperType', maximalInput.paperType);
    expect(paper).toHaveProperty('reference', maximalInput.reference);
    expect(paper.relatedPaper).toHaveLength(2);
    expect(paper.relatedPaper?.toString()).toEqual(
      maximalInput.relatedPaper?.toString(),
    );
    expect(paper.subordinatedPaper).toHaveLength(3);
    expect(paper.subordinatedPaper?.toString()).toEqual(
      maximalInput.subordinatedPaper?.toString(),
    );
    expect(paper.superordinatedPaper).toHaveLength(1);
    expect(paper.superordinatedPaper?.toString()).toEqual(
      maximalInput.superordinatedPaper?.toString(),
    );
    expect(paper.underDirectionOf).toHaveLength(2);
    expect(paper.underDirectionOf?.toString()).toEqual(
      maximalInput.underDirectionOf?.toString(),
    );
    expect(paper).toHaveProperty('created', maximalInput.created);
    expect(paper).toHaveProperty('deleted', maximalInput.deleted);
    expect(paper).toHaveProperty('modified', maximalInput.modified);
    expect(paper).toHaveProperty('web', maximalInput.web);
    expect(paper.keyword).toHaveLength(2);
    expect(paper.keyword?.toString()).toEqual(maximalInput.keyword?.toString());
    expect(paper).toHaveProperty('license', maximalInput.license);
  });

  it('fails to validate after creating a Paper without required values', async () => {
    const paper = new Paper({});

    await expect(paper.validate()).rejects.toThrowError();
  });
});
