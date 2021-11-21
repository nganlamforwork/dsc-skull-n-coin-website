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
    },
    Header:{
        "& h3":{
            [theme.breakpoints.down("sm")]: {
                margin: "auto 5%"
            },
        },
        "& p":{
            [theme.breakpoints.down("sm")]: {
                margin: "auto 5%"
            },
        }
    }
}));

export default function FourthSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="document">
        <div className={classes.Header}>
            <h1>DSC TEAM</h1>
            <h3>21CLC08 - Ho Chi Minh University Of Science</h3>
            <p className={classes.copyright}>Copyright &copy; 2021 DSC. All rights reserved</p>
        </div>
    </div>
    )
}

