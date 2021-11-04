import { Errors } from "./errors";

export const validateOrThrow = (input, type, error) => {
  if (typeof input !== type) throw error;
};

export const add = (...numbers) => {
  numbers.forEach(number => validateOrThrow(number, 'number', Errors.InputIsNaN));
  return numbers.reduce((acc, number) => acc += number, 0);
};

// export const toValueOrNull = value => typeof value !== 'undefined' ? value : null;