import { test, expect, vi, describe, beforeEach } from 'vitest';
import { useUserStore } from '../5';

describe('Store Zustand user', () => {
  beforeEach(() => {
    const { reset } = useUserStore.getState();
    reset();
  });

  test('Test can add a picture in the picture array', () => {
    const { addPicture } = useUserStore.getState();

    addPicture({
      id: 1,
      userId: 1,
      url: 'https://google.com',
    });

    const { pictures } = useUserStore.getState();
    expect(pictures).toMatchSnapshot();
  });

  test('Test can add multiple element in the picture array', () => {
    const { addPicture } = useUserStore.getState();

    addPicture({
      id: 1,
      userId: 1,
      url: 'https://google.com',
    });
    addPicture({
      id: 2,
      userId: 2,
      url: 'https://google.com',
    });

    const { pictures } = useUserStore.getState();
    expect(pictures).toMatchSnapshot();
  });

  test('Test can delete a picture in the picture array', () => {
    const { addPicture, deletePicture } = useUserStore.getState();

    addPicture({
      id: 1,
      userId: 1,
      url: 'https://google.com',
    });
    deletePicture(1);

    const { pictures } = useUserStore.getState();
    expect(pictures).toEqual([]);
  });

  test('Test can add a picture in mutiple picture array', () => {
    const { addPicture, deletePicture } = useUserStore.getState();

    addPicture({
      id: 1,
      userId: 1,
      url: 'https://google.com',
    });
    addPicture({
      id: 2,
      userId: 2,
      url: 'https://google.com',
    });
    deletePicture(1);

    const { pictures } = useUserStore.getState();
    expect(pictures).toMatchSnapshot();
  });

  test('Test can add a picture in mutiple picture array', () => {
    const { deletePicture } = useUserStore.getState();
    deletePicture(1);

    const { pictures } = useUserStore.getState();
    expect(pictures).toEqual([]);
  });

  test('Test can add a current user', () => {
    const { setCurrentUser } = useUserStore.getState();
    setCurrentUser({
      id: 1,
      name: 'test',
    });

    const { currentUser } = useUserStore.getState();
    expect(currentUser).toEqual({
      id: 1,
      name: 'test',
    });
  });

  test('Test can reset the data inside the store', () => {
    const { setCurrentUser, addPicture, reset } = useUserStore.getState();
    setCurrentUser({
      id: 1,
      name: 'test',
    });
    addPicture({
      id: 1,
      userId: 1,
      url: 'https://google.com',
    });

    reset();

    const { currentUser, pictures, users } = useUserStore.getState();

    expect(currentUser).toBeNull();
    expect(pictures).toEqual([]);
    expect(users).toEqual([]);
  });
});
