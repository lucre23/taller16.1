function fetchPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("No se encontró el Pokémon");
        }
        return response.json();
      })
      .then(data => {
        displayPokemon(data);
      })
      .catch(error => {
        document.getElementById("pokemonInfo").innerHTML = `<p>${error.message}</p>`;
      });
  }
  
  function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById("pokemonInfo");
    pokemonInfo.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      <p>Altura: ${pokemon.height / 10} m</p>
      <p>Peso: ${pokemon.weight / 10} kg</p>
      <p>Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}</p>
    `;
  }
  