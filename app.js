const fetchPokemon = () => {
  //   promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const pokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites["front_default"],
          type: data.types
            .map((type) => {
              return type.type.name;
            })
            .join(", "),
        };
        console.log(pokemon);
      });
  }
};

fetchPokemon();
