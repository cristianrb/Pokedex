import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { useStyles } from './appNavigatorStyles'

function AppNavigator() {
    const classes = useStyles()

    return (
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title} variant="h6">Pokedex</Typography>
                </Link>
                <Link to="/favourites" className={classes.link}>
                    <Typography className={classes.title} variant="h6">Favourites</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default AppNavigator;