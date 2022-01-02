import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './pokemonCardStyles'

const PokemonCard = (props) => {
    const { pokemon, image } = props
    const { id, name } = pokemon
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={2}>
            <Link className={classes.link} to={"/pokemon/" + id}>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={image} />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.text}>
                            {name}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};

export default PokemonCard;