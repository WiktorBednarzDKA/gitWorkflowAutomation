import { validateOrThrow, add } from '../../utils/common';

describe('validateOrThrow', () => {
  it('returns void', () => {
    const mockError = new Error('error');
    expect(validateOrThrow('a', 'string', mockError)).toEqual(undefined);
    expect(validateOrThrow(1, 'number', mockError)).toEqual(undefined);
    expect(validateOrThrow([], 'object', mockError)).toEqual(undefined);
  })
});

describe('addition', () => {
  it('throws if one of the inputs is NaN', () => {
    expect(() => add(1, 2, null, 3)).toThrow();
  });
  it('returns a sum of all provided numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
})