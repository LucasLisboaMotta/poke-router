const getImgUrl = (url) => {
  const splitURL = url.split('/');
  const pokeIndex = splitURL[splitURL.length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;
};

export default getImgUrl;
