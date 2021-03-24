import { formatToQueryDate } from './dateHelpers';

const testDate = new Date('2020-11-05T07:55:58+01:00');

describe('formatting dates', () => {
  it('creates a proper date from OParl dateTime format', () => {
    expect(testDate.toISOString()).toEqual('2020-11-05T06:55:58.000Z');
  });

  it('formats a date for a query correctly', () => {
    expect(formatToQueryDate(testDate)).toEqual(
      '2020-11-05T07%3A55%3A58%2B01%3A00',
    );
  });
});
