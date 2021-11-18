import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        padding: "6% 0",
        background: "black"
    },
}));

export default function FourthSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="document">
        <div className={classes.Headechr}>
            <h1 className={classes.mainHeader} >FOOTER HERE</h1>
            <h4 className={classes.subHeader}>footer here</h4>
        </div>
    </div>
    )
}

