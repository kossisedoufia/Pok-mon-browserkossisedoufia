// 1. Initial State
const currentPokemonId = 1;

// 2. DOM Elements
const pokemonContainer = document.querySelector("#pokemon-container");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

/**
 * TRY IT 1 & 2: FETCH & ERROR HANDLING
 * (This version is updated with the guard clause for Try 2)
 */
const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  // TRY IT 2: Guard Clause
  if (!response.ok) {
    console.error(`Error: Could not find Pokemon with ID ${id}`);
    return;
  }

  const pokemonData = await response.json();

  // TRY IT 1: Logging the response
  console.log("Pokemon Data:", pokemonData);
};

// Start the app
fetchPokemon(currentPokemonId);
