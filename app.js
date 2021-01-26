const fetchPokemon = () => {
  //   promises = [];
  //   for (let i = 0; i < 150; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/1`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
// };

fetchPokemon();
