import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
            margin:"3% 0"
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
            margin: "0 0 0 18px"
        }
    },
    gridItem:{
        [theme.breakpoints.down("sm")]: {
            textAlign: "left"
        },
    }
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
    </div>
    )
}

const infos = [
    {
        id:1,
        title: "Thể loại",
        description: "Game lật bài, trí nhớ, đua thời gian"
    },
    {
        id:2,
        title: "Công cụ phát triển",
        description: "Game Maker Studio"
    },
    {
        id:3,
        title: "Thời gian phát hành",
        description: "Ver1 - 11/2021"
    },
    {
        id:4,
        title: "Yêu cầu",
        description: "Trực tuyến, sử dụng trình duyệt Opera"
    },
]