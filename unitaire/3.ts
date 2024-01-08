/**
 * Vous avez ici une fonction qui permet de récupérer la liste des pokemons et de filtrer un résultat de recherche
 * Vérifiez que la fonction marche sans avoir à faire le réel appel d'api (utilisation de mock)
 *
 * Pensez à bien tester si jamais l'api fail que la fonction gère ça de la bonne manière
 *
 * Vous devez écrire les tests pour vous assurer que cette fonction marche bien
 *
 */

import axios from 'axios';

export interface Pokemon {
  name: string;
  url: string;
}

export async function searchPokemon(searchString: string): Promise<Pokemon[]> {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=1000'
    );
    const results: Pokemon[] = response.data.results;

    const filteredResults = results.filter((pokemon) => {
      if (!pokemon.name || typeof pokemon.name !== 'string') return false;
      return pokemon.name
        .toLocaleLowerCase()
        .includes(searchString.toLowerCase());
    });
    return filteredResults;
  } catch (error) {
    console.error('Error occurred while fetching Pokémon:', error);
    return [];
  }
}
