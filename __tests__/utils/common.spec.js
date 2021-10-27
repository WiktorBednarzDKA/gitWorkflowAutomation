import { checkIfNumber, addition } from '../../utils/common';

describe('checkIfNumber', () => {
  const badInputs = [null, false, true, undefined, '', 'a', [], {}];
  const allInputs = [...badInputs, 1];

  it('returns a boolean for any given input', () => {
    allInputs.forEach(input => expect(typeof checkIfNumber(input)).toEqual('boolean'));
  })
  it('returns true if given input is a number', () => {
    expect(checkIfNumber(1)).toBeTruthy();
  });
  it('returns false in given input is not a number', () => {
    badInputs.forEach(input => expect(checkIfNumber(input)).toBeFalsy());
  })
  it('returns false if given no input', () => {
    expect(checkIfNumber()).toBeFalsy();
  })
});

describe('addition', () => {
  it('throws an error if given no input', () => {
    expect(() => addition()).toThrow();
  });
})