import { test, expect, vi } from 'vitest';
import { calculateTotalTime, type User } from '../2';

test('Function returns correct total time', () => {
  const users: User[] = [
    {
      name: "Alice",
      records: [
        { time: 10, name: "Record 1" },
        { time: 20, name: "Record 2" },
        // Add more records here...
      ],
    },
    {
      name: "Bob",
      records: [
        { time: 15, name: "Record 3" },
        { time: 25, name: "Record 4" },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const actual = calculateTotalTime(users, 'asc');
  const expected = [ { name: 'Alice', totalTime: 30 }, { name: 'Bob', totalTime: 40 } ];

  expect(actual).toEqual(expected);
})

test('Function order correctly when asked "desc"', () => {
  const users: User[] = [
    {
      name: "Alice",
      records: [
        { time: 10, name: "Record 1" },
        { time: 5, name: "Record 2" },
        // Add more records here...
      ],
    },
    {
      name: "Bob",
      records: [
        { time: 15, name: "Record 3" },
        { time: 55, name: "Record 4" },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const actual = calculateTotalTime(users, 'desc');
  const expected = [ { name: 'Bob', totalTime: 70 }, { name: 'Alice', totalTime: 15 } ];

  expect(actual).toEqual(expected);
})

test('Function order correctly when asked "asc"', () => {
  const users: User[] = [
    {
      name: "Alice",
      records: [
        { time: 10, name: "Record 1" },
        { time: 5, name: "Record 2" },
        // Add more records here...
      ],
    },
    {
      name: "Bob",
      records: [
        { time: 15, name: "Record 3" },
        { time: 55, name: "Record 4" },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const actual = calculateTotalTime(users, 'asc');
  const expected = [ { name: 'Alice', totalTime: 15 }, { name: 'Bob', totalTime: 70 } ];

  expect(actual).toEqual(expected);
})

test('Function order correctly when asked "asc"', () => {
  const users: User[] = [
    {
      name: "Alice",
      records: [
        { time: 10, name: "Record 1" },
        { time: null, name: "Record 2" },
        // Add more records here...
      ],
    },
    {
      name: "Bob",
      records: [
        { time: 15, name: "Record 3" },
        { time: -1, name: "Record 4" },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const actual = calculateTotalTime(users, 'asc');
  const expected = [ { name: 'Alice', totalTime: 10 }, { name: 'Bob', totalTime: 15 } ];

  expect(actual).toEqual(expected);
})

test('Function order correctly when asked "desc"', () => {
  const users: User[] = [
    {
      name: "Alice",
      records: [
        { time: 10, name: "Record 1" },
        { time: null, name: "Record 2" },
        // Add more records here...
      ],
    },
    {
      name: "Bob",
      records: [
        { time: 15, name: "Record 3" },
        { time: -1, name: "Record 4" },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const actual = calculateTotalTime(users, 'desc');
  const expected = [ { name: 'Bob', totalTime: 15 }, { name: 'Alice', totalTime: 10 } ];

  expect(actual).toEqual(expected);
})