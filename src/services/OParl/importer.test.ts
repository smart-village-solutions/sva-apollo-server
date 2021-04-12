// import { setupTestDataBase } from '../../helpers';
// import { Body, Meeting, System } from '../../models';
import { UniqueQueue } from '../../UniqueQueue';
// import { importOParl } from './importer';

// const helperFuncs1 = setupTestDataBase('test_importer__1_0');
// const helperFuncs2 = setupTestDataBase('test_importer__1_1');

// const testUrl = 'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/system.asp';
// const testUrl2 =
//   'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/system';

describe('the unique queue', () => {
  it('works as expected', () => {
    const queue = new UniqueQueue<string>(
      (value) => value.slice(0, 3),
      () => false,
      ['asds', 'asda'],
    );

    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 1, completed: 0 }),
    );

    queue.add('asd');
    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 1, completed: 0 }),
    );

    queue.add('dsa');
    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 2, completed: 0 }),
    );

    expect(queue.next()).toEqual('dsa');
    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 1, completed: 1 }),
    );

    expect(queue.next()).toEqual('asds');
    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 0, completed: 2 }),
    );

    queue.add('asdasdasd');
    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 0, completed: 2 }),
    );

    queue.add('wasdasdasd');
    expect(JSON.stringify(queue.getLength())).toEqual(
      JSON.stringify({ queued: 1, completed: 2 }),
    );
  });
});

// these tests take too long to be in the CI
// describe('the importer for 1.0', () => {
//   beforeAll(async () => {
//     jest.setTimeout(18000000);
//     helperFuncs1.beforeAll();
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
//     helperFuncs1.afterAll();
//   });
// });

// describe('the importer for 1.1', () => {
//   beforeAll(async () => {
//     jest.setTimeout(18000000);
//     helperFuncs2.beforeAll();
//   });

//   it('resolves', async () => {
//     await expect(importOParl(testUrl2)).resolves.toBeTruthy();
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

//   it('imports a meeting', async () => {
//     const meetingJson = (
//       await Meeting.findOne({
//         externalId:
//           'https://sdnetrim.kdvz-frechen.de/rim4883/webservice/oparl/v1.1/body/1/meeting/486',
//       })
//     )?.toJSON();

//     delete meetingJson?._id;

//     expect(meetingJson).toMatchSnapshot();
//   });

//   afterAll(async () => {
//     jest.setTimeout(5000);
//     helperFuncs2.afterAll();
//   });
// });
