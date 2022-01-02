import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
    },
    text: {
        textTransform: "capitalize"
    }
}))