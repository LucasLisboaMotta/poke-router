export const getPokemons = () => {
  const meusPokemon = JSON.parse(localStorage.getItem('pokemon'));

  if (meusPokemon === null) {
    return [];
  }
  return meusPokemon;
};

export const savePokemon = (pokemon) => {
  const meusPokemon = getPokemons();
  meusPokemon.push(pokemon);
  localStorage.setItem('pokemon', JSON.stringify(meusPokemon));
};

export const isFavorite = (id) => {
  const meusPokemons = getPokemons();
  const result = meusPokemons.some(({ id: pokeId }) => id === pokeId);
  return result;
};

export const removePokemon = (id) => {
  const meusPokemons = getPokemons();
  const result = meusPokemons.filter(({ id: pokeId }) => (id !== pokeId));
  localStorage.setItem('pokemon', JSON.stringify(result));
};
