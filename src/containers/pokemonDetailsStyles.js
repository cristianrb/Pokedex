import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles(theme => ({
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
        width: "250px",
        height: "250px"
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
        fontSize:30,
        textTransform: "capitalize"
    }
})) 