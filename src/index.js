document.addEventListener("DOMContentLoaded", () => {
  console.log(POKEMON); //YOUR CODE HERE

  const container = document.getElementById("pokemon-container");
  const boxText = document.getElementById("pokemon-search-input");

  for (let i = 0; i < POKEMON.length; i++) {
    const currPoke = POKEMON[i];
    const card = `<div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${currPoke.name}</h1>
        <div class="pokemon-image">
          <img data-id="${
            currPoke.id
          }" data-action="flip" class="toggle-sprite" src="${
      currPoke.sprites.front
    }">
        </div>
      </div>
    </div>`;

    container.innerHTML += card;
  }

  boxText.addEventListener("input", event => {
    console.log(event.target.value);

    container.innerHTML = "";

    const newPokemon = POKEMON.filter(pokemon =>
      pokemon.name.includes(event.target.value)
    );
    newPokemon.forEach(pokemon => {
      const card = `<div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${
              pokemon.id
            }" data-action="flip" class="toggle-sprite" src="${
        pokemon.sprites.front
      }">
          </div>
        </div>
      </div>`;

      container.innerHTML += card;
    });

    // for (let i = 0; i < newPokemon.length; i++) {
    //   const currPoke = newPokemon[i];
    //   const card = `<div class="pokemon-card">
    //     <div class="pokemon-frame">
    //       <h1 class="center-text">${currPoke.name}</h1>
    //       <div class="pokemon-image">
    //         <img data-id="${
    //           currPoke.id
    //         }" data-action="flip" class="toggle-sprite" src="${
    //     currPoke.sprites.front
    //   }">
    //       </div>
    //     </div>
    //   </div>`;
    //
    //   container.innerHTML += card;
    // }

    //console.log(event.target.value);
  });
  // grab text inside of it
  // for each pokemon being displayed
  // check if pokmon name includes string
});
