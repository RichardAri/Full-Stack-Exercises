const getPokemonInfo = async (pokemonName) => {
    const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
};

const displayPokemon = async () => {
    const pokemonList = document.getElementById('pokemonList');
    for (let i = 1; i <= 14; i++) {
        const pokemonName = `${i}`;
        const pokemonInfo = await getPokemonInfo(pokemonName);
        const pokemonImage = pokemonInfo.sprites.front_default;
        const pokemonNameElement = pokemonInfo.name;
        const card = document.createElement('div');
        card.classList.add('pokemonCard');
        const image = document.createElement('img');
        image.classList.add('pokemonImage');
        image.src = pokemonImage;
        const name = document.createElement('div');
        name.textContent = pokemonNameElement;
        card.appendChild(image);
        card.appendChild(name);
        pokemonList.appendChild(card);
    }
};

displayPokemon();

