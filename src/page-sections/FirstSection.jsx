import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import screens from ".././img/screens.png";
import title from ".././img/title.svg";
const useStyles = makeStyles(theme =>({
    root:{
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        marginTop: "12%",
        [theme.breakpoints.down("sm")]: {
            marginTop: "18%",
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: "20%",
        },
    },
    mainHeader:{        
        "& h1":{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: "0.2px",
            marginTop: 0,
            [theme.breakpoints.down("sm")]: {
                fontSize: 70,
            },
        },
        "& img":{
            width:"60%",
            [theme.breakpoints.down("sm")]: {
                width: "90%",
            },
        }
    },
    subHeader:{
        fontSize: 24,
        lineHeight: "40px",
        fontWeight: 500,
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
            lineHeight: "30px",
            margin: "4% 5%"
        },
    },
    startButton:{
        marginTop:"3%",
        backgroundColor: "#181818 !important",
        color: "white !important",
        borderRadius: "0px !important",
        border: "1px solid white",
        padding: "14px 40px !important",
        textTransform: "none !important",
        fontSize: "18px !important",
        fontFamily: " 'Quicksand', sans-serif",
        "&:hover": {
            backgroundColor: "white !important",
            color: "#181818 !important",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px !important",
          padding: "8px 30px !important",
        },
    },
    screenImg:{
        marginTop: "7%",
        "& img":{
            width:"100%"
        }
    },
    links:{
        textDecoration: "none"
    }
}));

export default function FirstSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root}>
        <div className={classes.mainHeader}>
            <img src={title} alt="Skull n Coin" />
        </div>
        <h4 className={classes.subHeader}>DSC TEAM FROM 21CLC08 <br/> HO CHI MINH UNIVERISITY OF SCIENCE</h4>
        
        <a className={classes.links} href="#about">
            <Button className={classes.startButton}>Learn More</Button>
        </a>
        <div className={classes.screenImg}><img src={screens} alt="screenImg"/></div>
    </div>
    )
}
