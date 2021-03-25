import { preferId } from './importer';
import { ImportQueueEntry, ImportType } from './ImportTypes';

// const helperFuncs = setupTestDataBase('test_importer');

// const testUrl = 'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/system.asp';

describe('the filterDuplicateFunction', () => {
  it('filters as expected', () => {
    const arr: [ImportQueueEntry, ImportType][] = [
      ['asd', ImportType.Body],
      ['asd', ImportType.Body],
      [{ id: 'asd', other: 'asd' }, ImportType.Body],
      [{ id: 'asd', other: 'assd' }, ImportType.Body],
      [{ id: 'wasd', other: 'asd' }, ImportType.Body],
      [{ id: 'wasd', other: 'assd' }, ImportType.Body],
      ['wasd', ImportType.Body],
    ];

    expect(arr.filter(preferId)).toMatchSnapshot();
  });
});

// this test takes too long to be in the CI

// describe('the importer', () => {
//   beforeAll(async () => {
//     jest.setTimeout(18000000);
//     helperFuncs.beforeAll();
//   });

//   it('resolves', async () => {
//     await expect(importOParl(testUrl)).resolves.toBeTruthy();
//   });

//   it('imports a system', async () => {
//     const systemJson = (await System.findOne())?.toJSON();

//     delete systemJson?._id;

//     expect(systemJson).toMatchSnapshot();
//   });

//   it('imports a body', async () => {
//     const bodyJson = (await Body.findOne())?.toJSON();

//     delete bodyJson?._id;

//     expect(bodyJson).toMatchSnapshot();
//   });

//   afterAll(async () => {
//     jest.setTimeout(5000);
//     helperFuncs.afterAll();
//   });
// });
