/**
 * Vous avez ici une fonction qui permet de filtrer les utilisateurs en dessous de 18 ans
 * Et ensuite de les ordonner par nom desc
 * 
 * Vous devez écrire les tests pour vous assurer que cette fonction marche bien
 * 
 * Ex de source de donnée : 
 const users: User[] = [
  { age: 25, name: "Alice" },
  { age: 17, name: "Bob" },
  { age: 30, name: "Charlie" },
  // Add more users here...
];
 */

export interface User {
  age: number;
  name: string;
}

export function filterAndSortUsers(users: User[]): User[] {
  const filteredUsers = users.filter((user) => user.age >= 18 && user.name);
  const sortedUsers = filteredUsers.sort((a, b) =>
    b.name.localeCompare(a.name)
  );
  return sortedUsers;
}
