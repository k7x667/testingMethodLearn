import { test, expect, vi } from 'vitest';
import { filterAndSortUsers, User } from '../1';

test('It should filter underage people', async () => {
  const users: User[] = [
    { age: 25, name: 'Alice' },
    { age: 17, name: 'Bob' },
    { age: 30, name: 'Charlie' },
    // Add more users here...
  ];

  const actual = filterAndSortUsers(users);
  const expected = [
    { age: 30, name: 'Charlie' },
    { age: 25, name: 'Alice' },
  ];

  expect(actual).toEqual(expected);
});

test('It should should sort users by name desc', async () => {
  const users: User[] = [
    { age: 19, name: 'Conor' },
    { age: 17, name: 'Bob' },
    { age: 29, name: 'Rambo' },
    { age: 84, name: 'Michel' },
    // Add more users here...
  ];

  const actual = filterAndSortUsers(users);
  const expected = [
    { age: 29, name: 'Rambo' },
    { age: 84, name: 'Michel' },
    { age: 19, name: 'Conor' },
  ];

  expect(actual).toEqual(expected);
});

test('It should not fail when sending wrong age value', async () => {
  const users: User[] = [
    { age: -1, name: 'Conor' },
    { age: NaN, name: 'Bob' },
    { age: 29, name: 'Rambo' },
    { age: null, name: 'Michel' },
    { age: undefined, name: 'Jeanine' },

    // Add more users here...
  ];

  const actual = filterAndSortUsers(users);
  const expected = [{ age: 29, name: 'Rambo' }];

  expect(actual).toEqual(expected);
});

test('It should not fail when sending wrong age value', async () => {
  const users: User[] = [
    { age: -1, name: 'Conor' },
    { age: NaN, name: 'Bob' },
    { age: 29, name: 'Rambo' },
    { age: 84, name: undefined },
    { age: undefined, name: 'Jeanine' },

    // Add more users here...
  ];

  const actual = filterAndSortUsers(users);
  const expected = [{ age: 29, name: 'Rambo' }];

  expect(actual).toEqual(expected);
});
