import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SimpleTab from './components/SimpleTab.jsx';


const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "6%",
    },
    mainHeader:{
        fontSize: 52,
        letterSpacing: "0.2px",
        marginBottom: 14
    },
    subHeader:{
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "lighter",
        margin: "0 30%",
        marginBottom: "6%"
    },
    gallery:{
        margin: "auto 20%",
        color: "black"
    }
}));

export default function ThirdSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="project">
        <div className={classes.Header}>
            <h1 className={classes.mainHeader} >PROJECT</h1>
            <h4 className={classes.subHeader}>Skull n Coin Game</h4>
        </div>
        <div className={classes.gallery}>
            <SimpleTab />
        </div>
    </div>
    )
}

