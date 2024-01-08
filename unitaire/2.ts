/**
 * Vous avez ici une fonction qui permet de calculer le temps total enregistré par les utilisateurs
 * Le résultat est ensuite ordonée par temps total asc ou desc en fonction du paramètre passé
 * 
 * Vous devez écrire les tests pour vous assurer que cette fonction marche bien
 * 
 * Ex de source de donnée : 
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
 */

export interface Record {
  time: number;
  name: string;
}

export interface User {
  name: string;
  records: Record[];
}

type UserTotalTime = {
  name: string;
  totalTime: number;
};

type SortOrder = 'asc' | 'desc';

export function calculateTotalTime(
  users: User[],
  sortOrder: SortOrder = 'asc'
): UserTotalTime[] {
  const results: UserTotalTime[] = [];

  for (const user of users) {
    const totalTime = user.records.reduce((acc, record) => {
      if (typeof record.time !== 'number' || record.time < 0) return acc;
      return acc + record.time;
    }, 0);
    results.push({ name: user.name, totalTime });
  }

  if (sortOrder === 'asc') {
    results.sort((a, b) => a.totalTime - b.totalTime);
  } else {
    results.sort((a, b) => b.totalTime - a.totalTime);
  }

  return results;
}
