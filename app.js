const fetchPokemon = () => {
  promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    // console.log(promises);
  }

  Promise.all(promises).then((results) => {
    // console.log(results);
    const pokemon = results.map((data) => ({
      id: data.id,
      name: data.name,
      image: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    console.log(pokemon);
  });
};
//   .then((data) => {
//     console.log(data);
//     const pokemon = {
//       id: data.id,
//       name: data.name,
//       image: data.sprites["front_default"],
//       type: data.types
//         .map((type) => {
//           return type.type.name;
//         })
//         .join(", "),
//     };
//     console.log(pokemon);
//   });

fetchPokemon();
