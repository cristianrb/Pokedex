import { TOGGLE_FAVOURITE } from "./actions";

const initialData = {
    favourites: []
}

const pokemonReducer = (state = initialData, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            let pokemon = action.payload
            let pokemonFromFavourites = state.favourites.find((favPokemon) => pokemon.id === favPokemon.id)
            return {
                ...state,
                favourites: pokemonFromFavourites
                    ? [...state.favourites.filter((pokemon) => pokemon.id !== pokemonFromFavourites.id)]
                    : [...state.favourites, pokemon]
            };
        default:
            return state;
    }
}

export default pokemonReducer;