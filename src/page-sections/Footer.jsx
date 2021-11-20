import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        padding: "3% 0 0 0",
        background: "black"
    },
    copyright:{
        marginTop:"6%"
    }
}));

export default function FourthSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="document">
        <div className={classes.Headechr}>
            <h1>DSC TEAM</h1>
            <h3>21CLC08 - Ho Chi Minh University Of Science</h3>
            <p className={classes.copyright}>Copyright &copy; 2021 DSC. All rights reserved</p>
        </div>
    </div>
    )
}

