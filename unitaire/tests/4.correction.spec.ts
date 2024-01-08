import { test, expect, vi } from 'vitest';
import { divideNumbers } from '../4';

test('Should work fine', () => {
  const actual = divideNumbers(4, 2);

  expect(actual).toEqual(2);
});

test('Should throw an error when divided by 0', () => {
  expect(() => {
    divideNumbers(10, 0);
  }).toThrowError();
});

test('Should throw an error if number is undefined', () => {
  expect(() => {
    divideNumbers(undefined, 2);
  }).toThrow('Invalid number input');
});

test('Should throw an error if number is null', () => {
  expect(() => {
    divideNumbers(2, null);
  }).toThrow('Invalid number input');
});

test('Should throw an error if number is Nan', () => {
  expect(() => {
    divideNumbers(2, NaN);
  }).toThrow('Invalid number input');
});

test('Should work fine with negative numbers', () => {
  const actual = divideNumbers(-12, 2);

  expect(actual).toEqual(-6);
});

test('Should work fine with negative numbers', () => {
  const actual = divideNumbers(-12, -2);

  expect(actual).toEqual(6);
});

test('Should work fine with negative numbers', () => {
  const actual = divideNumbers(6.45, 2);

  expect(actual).toEqual(3.225);
});

test('Should work fine with negative numbers', () => {
  const actual = divideNumbers(6.45, 3.5847);

  expect(actual).toEqual(1.7993137501046113);
});
