// 1. Initial State
let currentPokemonId = 1;

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
  renderPokemon(pokemonData);
};

// Start the app
fetchPokemon(currentPokemonId);

/**
 * TRY IT 3: RENDER TO DOM
 * Displays the image, name, and types using semantic HTML and Tailwind.
 */
const renderPokemon = (pokemon) => {
  // Use map() to create the list of types (required for the grade)
  const typesHtml = pokemon.types
    .map(
      (typeInfo) =>
        `<li class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold capitalize">${typeInfo.type.name}</li>`,
    )
    .join("");

  // Inject semantic HTML into our container
  pokemonContainer.innerHTML = `
    <figure class="flex flex-col items-center bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 transition-all">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-48 h-48 drop-shadow-md">
      <figcaption class="text-3xl font-black capitalize text-slate-800 mt-4">${pokemon.name}</figcaption>
      <ul class="flex gap-2 mt-4">
        ${typesHtml}
      </ul>
    </figure>
  `;
};
/**
 * TRY IT 4: NAVIGATION
 * Adds click events and ensures the ID stays between 1 and 1025.
 */

// Next Button: Increment and fetch
nextBtn.addEventListener("click", () => {
  if (currentPokemonId < 1025) {
    currentPokemonId++;
    fetchPokemon(currentPokemonId);
  }
});

// Previous Button: Decrement and fetch
prevBtn.addEventListener("click", () => {
  if (currentPokemonId > 1) {
    currentPokemonId--;
    fetchPokemon(currentPokemonId);
  }
});
