/**
 * Vous avez ici un store zustand qui vous permet de gérer des infos d'utilisateurs ainsi que quelques photos
 * vérifiez que les fonctions affectent bien le store comme prévu
 *
 * Attention pensez bien à reset le store avant chaque tests (il se peut qu'il y ai quelque chose sur ça pour vitest ou jest)
 *
 */

import create from 'zustand';

export interface User {
  id: number;
  name: string;
}

export interface Picture {
  id: number;
  userId: number;
  url: string;
}

export interface UserStore {
  users: User[];
  currentUser: User | null;
  pictures: Picture[];
  setCurrentUser: (user: User | null) => void;
  addPicture: (picture: Picture) => void;
  deletePicture: (pictureId: number) => void;
  reset: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  currentUser: null,
  pictures: [],
  setCurrentUser: (user) => set((state) => ({ ...state, currentUser: user })),
  addPicture: (picture) =>
    set((state) => ({ ...state, pictures: [...state.pictures, picture] })),
  deletePicture: (pictureId) =>
    set((state) => ({
      ...state,
      pictures: state.pictures.filter((picture) => picture.id !== pictureId),
    })),
  reset: () => set(() => ({ users: [], currentUser: null, pictures: [] })),
}));
