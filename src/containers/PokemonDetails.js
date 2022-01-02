import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { POKEMON_API_URL } from '../config';
import { connect } from 'react-redux';
import { toggleFavourite } from '../redux/actions';
import { useStyles } from './pokemonDetailsStyles';

const PokemonDetails = (props) => {
    const {favourites, toggleFavourites} = props
    let { id } = useParams();
    const classes = useStyles()
    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        axios.get(POKEMON_API_URL + "/" + id)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                setPokemonData(response.data)
            }
        })
    }, [id])

    const favChecker = (pokemon) => {
        return favourites.find((actualPokemon) => actualPokemon.id === pokemon.id)
    }

    return pokemonData ? (
        <Box>
            <Box className={classes.pokedexContainer}>
                <Typography className={classes.textTitle} variant="h1">
                    {pokemonData.name}
                </Typography>
                <img className={classes.pokemonImage} src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                <Box className={classes.pokemonInfoContainer}>
                    <hr className={classes.separator}/>
                    <Grid container>
                        <Grid item md={1}>
                            <Button className={classes.favourite} onClick={() => toggleFavourites(pokemonData)}>
                                <FavoriteIcon style={{color: favChecker(pokemonData) ? "red" : "white", fontSize: 45}}/>
                            </Button>
                        </Grid>
                        <Grid item md={2}>
                            <Typography className={classes.text}>
                                Name:
                                <br />
                                {pokemonData.name}
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography className={classes.text}>
                                Height:
                                <br />
                                {pokemonData.height}m
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography className={classes.text}>
                                Weight:
                                <br />
                                {pokemonData.weight}kg
                            </Typography>
                        </Grid>
                        {pokemonData.types.map(pokemonType => {
                            const { name } = pokemonType.type
                            return (
                                <Grid item md={2} key={name}>
                                    <Typography className={classes.text}>
                                        Type:
                                        <br />
                                        {name}
                                    </Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
        </Box>
        
    ) : (
        <CircularProgress style={{ marginTop: 100 }} />
    );
};

const mapStateToProps = (state) => ({
    favourites: state.favourites
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFavourites: (pokemon) => dispatch(toggleFavourite(pokemon))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);