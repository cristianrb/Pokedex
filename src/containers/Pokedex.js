import { Box, CircularProgress, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';
import {useStyles} from './pokedexStyles'

function Pokedex() {
    const [pokemonData, setPokemonData] = useState(null)
    const classes = useStyles()

    useEffect(() => {
        axios.get(POKEMON_API_URL + "?limit=850")
             .then((response) => {
                 if (response.status >= 200 && response.status < 300) {
                     const { results } = response.data
                     let newPokemonData = []
                     results.forEach((pokemon, index) => {
                         index++
                         let pokemonObject = {
                             id: index,
                             url: IMAGE_API_URL + index + ".png",
                             name: pokemon.name
                         }
                         newPokemonData.push(pokemonObject)
                     });
                     setPokemonData(newPokemonData)
                 }
             })
    }, [])

    return (
        <Box>
            {pokemonData ? 
            
            <Grid className={classes.pokedexContainer} container spacing={2}>
                {pokemonData.map(pokemon => {
                    return (
                        <PokemonCard 
                            key={pokemon.id}
                            pokemon={pokemon}
                            image={pokemon.url}
                        />
                    )
                })}
            </Grid>

            : <CircularProgress style={{marginTop: 100}}   />}
        </Box>
        
    );
}

export default Pokedex;