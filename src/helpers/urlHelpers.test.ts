import { appendURIParams } from './urlHelpers';

describe('formatting urls', () => {
  it('joins an array of params properly to a string without params', () => {
    expect(appendURIParams('base', 'first', 'second')).toEqual(
      'base?first&second',
    );
  });

  it('joins an array of params properly to a string with params', () => {
    expect(appendURIParams('base?first', 'second')).toEqual(
      'base?first&second',
    );
  });

  it('joins an empty array of params properly to a string without params', () => {
    expect(appendURIParams('base')).toEqual('base');
  });

  it('joins an empty array of params properly to a string with params', () => {
    expect(appendURIParams('base?first&second')).toEqual('base?first&second');
  });
});
