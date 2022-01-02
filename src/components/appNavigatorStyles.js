import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none',
        marginRight: 15
    },
    title: {
        cursor: 'pointer',
        color: 'white'
    }
}))