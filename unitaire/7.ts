/**
 * Vous avez ici une fonction qui permet de memoize un autre fonction (checkez sur internet ou demandez moi si cette notion ne vous est pas familière)
 *
 * Testez si cette fonction execute la fonction seulement une fois, avec deux appels identiques avec les mêmes arguments
 *
 */

export function memoize(
  func: (...args: any[]) => any
): (...args: any[]) => any {
  const cache: { [key: string]: any } = {};

  return (...args: any[]) => {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;

    return result;
  };
}

/* Example usage
export function expensiveOperation(n: number): number {
  console.log('Performing expensive operation...');
  return n * 2;
}
const memoizedExpensiveOperation = memoize(expensiveOperation);
memoizedExpensiveOperation(12) // outputs => 10 
*/
