export const addition = (a, b) => {
  if (!checkIfNumber(a) || !checkIfNumber(b)) throw new Error('one or more inputs is NaN');
  return a + b;
}

export const checkIfNumber = input => !!(input && typeof input === 'number');