import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import screens from ".././img/screens.png";

const useStyles = makeStyles(theme =>({
    root:{
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        marginTop: "10%"
    },
    mainHeader:{
        fontWeight: 500,
        fontSize: 80,
        lineHeight: "88px",
        letterSpacing: "0.2px"
    },
    subHeader:{
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "normal"
    },
    startButton:{
        marginTop:"4%",
        backgroundColor: "#181818 !important",
        color: "white !important",
        borderRadius: "0px !important",
        border: "1px solid white",
        padding: "14px 40px !important",
        textTransform: "none !important",
        fontSize: "16px !important",
        "&:hover": {
            backgroundColor: "white !important",
            color: "#181818 !important",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px !important",
          padding: "6px 20px !important",
          minWidth: "110px !important"
        },
    },
    screenImg:{
        marginTop: "3%",
        "& img":{
            width:"100%"
        }
    }
}));

export default function FirstSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root}>
        <h1 className={classes.mainHeader}>SKULL N COIN <br/> GAME</h1>
        <h4 className={classes.subHeader}>DSC TEAM FROM 21CLC08 <br/> HO CHI MINH UNIVERISITY OF SCIENCE</h4>
        
        <Button className={classes.startButton}>Learn More</Button>
        <div className={classes.screenImg}><img src={screens} alt="screenImg"/></div>
    </div>
    )
}
