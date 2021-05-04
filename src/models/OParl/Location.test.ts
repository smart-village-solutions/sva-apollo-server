import { ILocation, Location } from './Location';

const maximalInput: ILocation = {
  externalId: 'eId',
  type: 't',
  bodies: ['b1', 'b2', 'b3'],
  description: 'd',
  geojson: '{}',
  locality: 'l',
  meeting: ['me1', 'me2'],
  organization: ['o1', 'o2'],
  papers: ['pa1'],
  postalCode: '12345',
  room: 'R',
  streetAddress: 'sa',
  subLocality: 'sl',
  created: new Date(),
  deleted: true,
  modified: new Date(),
  web: 'w',
  keyword: ['first', 'second'],
  license: 'l',
  persons: ['p1', 'p2'],
};

const minimalInput: ILocation = {
  externalId: 'eId',
  type: 't',
};

describe('creating a Location', () => {
  it('creates a Location with minimal input', async () => {
    const location = new Location(minimalInput);

    // check that the validation passes
    await expect(location.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(location).toHaveProperty('externalId', minimalInput.externalId);
    expect(location).toHaveProperty('type', minimalInput.type);
  });

  it('creates a Location with maximal input', async () => {
    const location = new Location(maximalInput);

    // check that the validation passes
    await expect(location.validate()).resolves.toEqual(undefined);

    // check that the entries are properly set
    expect(location).toHaveProperty('externalId', maximalInput.externalId);
    expect(location).toHaveProperty('type', maximalInput.type);
    expect(location.bodies).toHaveLength(3);
    expect(location.bodies?.toString()).toEqual(
      maximalInput.bodies?.toString(),
    );
    expect(location).toHaveProperty('description', maximalInput.description);
    expect(location).toHaveProperty('geojson', maximalInput.geojson);
    expect(location).toHaveProperty('locality', maximalInput.locality);
    expect(location.meeting).toHaveLength(2);
    expect(location.meeting?.toString()).toEqual(
      maximalInput.meeting?.toString(),
    );
    expect(location.organization).toHaveLength(2);
    expect(location.organization?.toString()).toEqual(
      maximalInput.organization?.toString(),
    );
    expect(location.papers).toHaveLength(1);
    expect(location.papers?.toString()).toEqual(
      maximalInput.papers?.toString(),
    );
    expect(location).toHaveProperty('postalCode', maximalInput.postalCode);
    expect(location).toHaveProperty('room', maximalInput.room);
    expect(location).toHaveProperty(
      'streetAddress',
      maximalInput.streetAddress,
    );
    expect(location).toHaveProperty('subLocality', maximalInput.subLocality);
    expect(location).toHaveProperty('created', maximalInput.created);
    expect(location).toHaveProperty('deleted', maximalInput.deleted);
    expect(location).toHaveProperty('modified', maximalInput.modified);
    expect(location).toHaveProperty('web', maximalInput.web);
    expect(location.keyword).toHaveLength(2);
    expect(location.keyword?.toString()).toEqual(
      maximalInput.keyword?.toString(),
    );
    expect(location).toHaveProperty('license', maximalInput.license);
    expect(location.persons).toHaveLength(2);
    expect(location.persons?.toString()).toEqual(
      maximalInput.persons?.toString(),
    );
  });

  it('fails to validate after creating a Location without required values', async () => {
    const location = new Location({});

    await expect(location.validate()).rejects.toThrowError();
  });
});
