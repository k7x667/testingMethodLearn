import { test, assert, vi } from 'vitest';
import { filterAndSortUsers, User } from '../1';


test('filterAndSortUsers devrait filtrer les utilisateurs de moins de 18 ans et les trier par nom de manière décroissante', () => {
  const users: User[] = [
    { age: 25, name: "Alice" },
    { age: 17, name: "Bob" },
    { age: 30, name: "Charlie" },
  ];

  const result = filterAndSortUsers(users);

  /**
   * Output except :
   * 1 : 2 
   * 2 : charlie
   * 3 : alice
   */
  assert.equal(result.length, 2, '2 Users');
  assert.equal(result[0].name, 'Charlie', 'Charlie 1');
  assert.equal(result[1].name, 'Alice', 'Alice 2');
});
