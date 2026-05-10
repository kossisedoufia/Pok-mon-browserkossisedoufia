// Initial ID for the first Pokemon
const currentPokemonId = 1;

// Select DOM elements
const pokemonContainer = document.querySelector("#pokemon-container");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

/**
 * TRY IT 1: FETCH & LOG
 * Basic async function to fetch data and log it.
 */
const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await response.json();

  // Log the response to see properties like name, sprites, and types
  console.log("Pokemon Data:", pokemonData);
};

// Start by fetching the first Pokemon
fetchPokemon(currentPokemonId);
