/**
 * Vous avez ici une fonction qui permet de diviser deux nombres
 * vérifiez que la fonction marche bien, et vérifier qu'elle throw l'erreur du bon type si jamais une division par 0 est faite
 *
 * Vous devez écrire les tests pour vous assurer que cette fonction marche bien
 *
 */

export function divideNumbers(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }

  const result = a / b;
  if (isNaN(result)) throw new Error('Invalid number input');
  if (!isFinite(result)) throw new Error('Invalid number input');

  return result;
}
