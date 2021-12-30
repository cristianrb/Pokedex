import { Box, Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { POKEMON_API_URL } from '../config';

const useStyles = makeStyles(theme => ({
    pokedexContainer: {
        height: '86vh',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '75px',
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 30
    },
    textTitle: {
        textTransform: "upperCase",
        fontFamily: "Fantasy"
    },
    pokemonImage: {
        width: "170px",
        height: "170px"
    },
    pokemonInfoContainer: {
        bottom: 60,
        position: "absolute",
        width: "99%",
    },
    separator: {
        height: "0.01mm",
        width: "95%",
    },
    favourite: {
        height:50,
        width: 50,
        marginTop: 15
    },
    text: {
        fontSize:30
    }
})) 

const PokemonDetails = () => {
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
                            <Button className={classes.favourite}>
                                <FavoriteIcon style={{color: "white", fontSize: 45}}/>
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
                                <Grid item md={2}>
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

export default PokemonDetails;