import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    cardMedia: {
        margin: "auto",
        width: 130,
        height: 130
    },
    card: {
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        "&:hover": {
            backgroundColor: 'rgb(90, 90, 90)'
        }
    },
    cardContent: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    }
}))

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
                        <Typography>
                            {name}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};

export default PokemonCard;