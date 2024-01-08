import { test, expect, vi } from 'vitest';
import { searchPokemon, type Pokemon } from '../3';
import axios from 'axios';

vi.mock('axios');

test('Pokemon search working as expected in ideal conditions', async () => {
  const pokemons : Pokemon[] = [
    {name: "Pikachu", url:"https://google.com"},
    {name: "Mewtwo", url:"https://google.com"},
    {name: "Salamèche", url:"https://google.com"},
  ];

  axios.get.mockResolvedValueOnce({
    data: {
      results: pokemons
    }
  });

  const result = await searchPokemon('pikachu');

  expect(result).toEqual([
    {name: "Pikachu", url:"https://google.com"}
  ])
})

test('Should send be empty array when search did not match', async () => {
  const pokemons : Pokemon[] = [
    {name: "Pikachu", url:"https://google.com"},
    {name: "Mewtwo", url:"https://google.com"},
    {name: "Salamèche", url:"https://google.com"},
  ];

  axios.get.mockResolvedValueOnce({
    data: {
      results: pokemons
    }
  });

  const result = await searchPokemon('Raychu');

  expect(result).toEqual([])
})

test('Expect function to fail graciously', async () => {

  axios.get.mockRejectedValueOnce();

  const result = await searchPokemon('pikachu');

  expect(result).toEqual([])
})

test('Should work even with bad data', async () => {
  const pokemons : Pokemon[] = [
    {name: "Pikachu", url:"https://google.com"},
    {name: undefined, url:"https://google.com"},
    {name: null, url:"https://google.com"},
  ];

  axios.get.mockResolvedValueOnce({
    data: {
      results: pokemons
    }
  });

  const result = await searchPokemon('Pikachu');
  expect(result).toEqual([ { name: 'Pikachu', url: 'https://google.com' } ])
})