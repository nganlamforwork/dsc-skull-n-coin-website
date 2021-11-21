import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FourthSection from './FourthSection';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import thumbnail from '.././img/thumbnail-vertical.png';

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "10%",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "15%",
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: "25%",
        },
    },
    overview:{
        display: "flex",
        margin: "0 5%",
    },
    image:{
        maxWidth: "40%",
        "& img":{
            width:"70%"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    content:{
        marginRight:"5%",
        maxWidth: "60%",
        textAlign:"left",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            margin: "auto 8%",
            textAlign: "center"
        },
        "& span":{
            fontSize: "1.7rem",
            color:"#757de8"
        },
        "& h1":{
            fontSize:60,
            margin:"3% 0",
            [theme.breakpoints.down("xs")]: {
                fontSize:40
            },
        },
        "& h2":{
            margin:"3% 0 7% 0"
        },
        "& p":{
            fontSize:"1.15rem",
            lineHeight: "1.7rem"
        }
    },
    subtitle:{
        display: "flex",
        alignItems: "center",
        fontSize: 14,
        "& h2":{
            margin: "0 0 0 18px",
            [theme.breakpoints.down("sm")]: {
                fontSize:18,
                margin: "0 0 0 10px",
            },
        }
    },
    gridItem:{
        [theme.breakpoints.down("sm")]: {
            textAlign: "left"
        },
        "& p": {
            [theme.breakpoints.down("sm")]: {
                fontSize:14
            },
        }
    },
    mainHeader:{
        fontSize: 52,
        letterSpacing: "0.2px",
        marginBottom: "3%",
        [theme.breakpoints.down("xs")]: {
            fontSize:40
        },
    },
    subHeader:{
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "lighter",
        margin: "0 30%",
        marginBottom: "3%",
        [theme.breakpoints.down("sm")]: {
            margin: "5% 20%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "5% 10%",
        },
    },
    videoContainer:{
        position: "relative",
        paddingBottom:"56.25%",
        height:0,
        "& iframe":{
            position: "absolute",
            top:0,
            left:0,
        }
    },
    setFixedHeight:{
        margin:"0 20%",
        [theme.breakpoints.down("sm")]: {
            margin: "0 6%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "0 3%",
        },
    },
    download:{
        marginTop:"5%"
    },
    links:{
        textDecoration: "none"
    },
    startButton:{
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
}));

export default function ThirdSection() {
    const classes = useStyles();

    return (
    <div className={classes.root} id="project">
        <div className={classes.overview}>
            <div className={classes.image}>
                <img src={thumbnail} alt="thumbnail"/>
            </div>
            <div className={classes.content}>
                <span>GAME PROJECT</span>
                <h1>SKULL N COIN</h1>
                <h2>SUPER RELAXING GAME</h2>
                <Grid container spacing={3}>
                    {infos.map(info => (
                        <Grid item className={classes.gridItem} key={info.id} xs={12} sm={6}>
                            <div className={classes.subtitle}>
                                <DoneOutlineIcon style={{color:"#757de8"}}/> 
                                <h2>{info.title}</h2>
                            </div>
                            <p>{info.description}</p>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
        <div className={classes.trailer}>
            <h1 className={classes.mainHeader} >TRAILER</h1>
            <div className={classes.setFixedHeight}>
                <div className={classes.videoContainer}>
                    <iframe 
                        width="100%" height="100%"
                        src="https://www.youtube.com/embed/QCl89rjoxRY" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        <FourthSection />
        <div className={classes.download}>
            <h1 className={classes.mainHeader} >DOWNLOAD OUR GAME</h1>
            <h4 className={classes.subHeader}>
                Click the button below to download the zip file. Unzip it and run exe file. Now, you can play our game!
            </h4>
            <a 
                className={classes.links} 
                href="https://drive.google.com/file/d/1ZfBBUFIXRVNYV-ovKizHdvDUjYVh_J1E/view?usp=sharing"
                target="_blank" rel="noreferrer"
            >
                <Button className={classes.startButton}>Download</Button>
            </a>
        </div>
    </div>
    )
}

const infos = [
    {
        id:1,
        title: "Category",
        description: "Flipped Card, Memory Card, Speed run,…"
    },
    {
        id:2,
        title: "Development tool",
        description: "Game Maker Studio 2"
    },
    {
        id:3,
        title: "Date Release",
        description: "Version 1 - 11/2021"
    },
    {
        id:4,
        title: "Requirement",
        description: "Offline"
    },
]