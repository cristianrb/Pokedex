import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import PokemonCard from '../components/PokemonCard';
import { useStyles } from './favouritesStyles';

const mapStateToProps = (state) => {
    return {
        favourites: state.favourites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const Favourites = (props) => {
    const classes = useStyles()
    const {favourites} = props
    return (
        <Box>
            <Grid container spacing={2} className={classes.pokemonContainer}>
                {favourites.map(pokemon => {
                    return (
                        <PokemonCard pokemon={pokemon} key={pokemon.id} image={pokemon.sprites.front_shiny}/>
                    )
                })}
            </Grid>
        </Box>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Favourites);