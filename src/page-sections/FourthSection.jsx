import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import DemoCarousel from './components/Carousel'

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "3%",
    },
    mainHeader:{
        fontSize: 52,
        letterSpacing: "0.2px",
        marginBottom: "3%",
        [theme.breakpoints.down("xs")]: {
            fontSize:40
        },
    },
    gallery:{
        margin: "auto 20%",
        color: "black",
        [theme.breakpoints.down("sm")]: {
            margin: "auto 6%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "auto 3%",
        },
    }
}));

export default function FourthSection() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <h1 className={classes.mainHeader} >TUTORIAL</h1>
        <div className={classes.gallery}>
            <DemoCarousel />
        </div>
    </div>
    )
}

