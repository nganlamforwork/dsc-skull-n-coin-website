import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//avatars
import tbk from '.././img/tbk.jpg';
import ttl from '.././img/ttl.jpg';
import bnnm from '.././img/bnnm.jpg';
import hhp from '.././img/hhp.jpg';
import nhh from '.././img/nhh.jpg';
import lvnl from '.././img/lvnl.jpg';

//dsc
import dsc from '.././img/DSC.png';

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
    mainHeader:{
        fontSize: 60,
        letterSpacing: "0.2px",
        marginBottom: 14,
        [theme.breakpoints.down("xs")]: {
            marginTop:20,
            fontSize:40
        },
    },
    gridContainer:{
        margin: "50px 10%",
        [theme.breakpoints.down("sm")]: {
            margin: "30px 5%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "30px 8%",
        },
    },
    gridItem:{
        display:"flex",
        flexDirection:"column",
        flexGrow:1,
    },
    cardItem: {
        padding:"12% 5%",
        borderRadius: 16,
        border: "1px solid white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.4s ease-in-out",
        backgroundColor:"#181818",
        color:"white",
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            padding: "10% 3%"
        },
        "& p":{
            margin:7
        },
        "&:hover":{
            transform: "translateY(-20px)",
            boxShadow: "0 20px 60px rgba(255, 255, 255, 0.3)"
        },
        "& h2":{
            marginBottom: 0
        },
        "& h3":{
            marginTop: "2%"
        },
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        "&:hover":{
            transform: "scale(1.1)",
            transition: ".4s ease-in-out",
        }
    },
    icons:{
        fontSize: 40,
        margin:"30px 10px 0 10px",
        textDecoration: "none",
        transition: ".4s ease-in-out",
        color: "white",
        "&:hover": {
            transform: "scale(1.3)",
        },
    },
    overview:{
        display: "flex",
        margin: "0 5%",
    },
    image:{
        maxWidth: "50%",
        "& img":{
            width:"70%",
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
        "& h3":{
            fontSize:60,
            margin:"3% 0",
            [theme.breakpoints.down("xs")]: {
                fontSize:40
            },
        },
        "& p":{
            fontSize:"1.15rem",
            lineHeight: "1.7rem",
            [theme.breakpoints.down("sm")]: {
                fontSize:"1rem",
                lineHeight: "1.2rem",
            },
        },
    },
    hiddenRes:{
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
    }
}));

export default function SecondSection() {
    const classes = useStyles();
    const theme = useTheme();
    return (
    <div className={classes.root} id="about">
        <div className={classes.overview}>
            <div className={classes.image}>
                <img src={dsc} alt="dsc"/>
            </div>
            <div className={classes.content}>
                <span>ABOUT US</span>
                <h3 className={classes.title}>DSC TEAM</h3>
                <p>{description1}</p>
                <p className={classes.hiddenRes}>{description2}</p>
                <p>And here is a list of 6 members of the group with some background information!</p>
            </div>
        </div>
        <h3 className={classes.mainHeader}>MEMBERS</h3>
        <div className={classes.gridContainer}>
            <Grid container spacing={6}>
                {infos.map(info => (
                    <Grid item className={classes.gridItem} key={info.id} xs={12} sm={6} md={6} lg={4} >
                        <Card className={classes.cardItem}>
                            <Avatar alt="avatar" src={info.source} className={classes.large} />
                            <h2> {info.name}</h2>
                            <h3>{info.role}</h3>
                            <p><strong>Student ID:</strong> {info.mssv}</p>
                            <p><strong>Email:</strong> {info.email}</p>
                            <p><strong>Date of birth:</strong> {info.dateOfBirth}</p>
                            <p><strong>Personality:</strong> {info.personality}</p>
                            <p><strong>Position in project:<br/></strong> {info.task}</p>
                            <div>
                                <a href={info.facebook} target="_blank" rel="noreferrer">
                                    <FacebookIcon className={classes.icons} />
                                </a>
                                <a href={info.github} target="_blank" rel="noreferrer">
                                    <GitHubIcon className={classes.icons} />
                                </a>
                                <a href={info.linkedIn} target="_blank" rel="noreferrer">
                                    <LinkedInIcon className={classes.icons} />
                                </a>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
        
    </div>
    )
}


const infos=[
    {
        id:1,
        source: tbk,
        name: "Tran Binh Kha",
        role: "Leader",
        dateOfBirth: "16/09/2003",
        mssv: "21127065",
        task: "Game Developer",
        personality: "D",
        facebook: "https://facebook.com/trankha1609",
        linkedIn: "https://www.linkedin.com/in/trkha16/",
        github: "https://github.com/trkha16",
        email: "tbkha21@clc.fitus.edu.vn"
    },
    {
        id:2,
        source: ttl,
        role: "Member",
        name: "Tran Tung Lam",
        dateOfBirth: "26/02/2003",
        mssv: "21127337",
        task: "Game Developer",
        personality: "D",
        facebook: "https://facebook.com/tunglam.262",
        linkedIn: "https://www.linkedin.com/in/louis-tr%E1%BA%A7n-a4255b217/",
        github: "https://github.com/Louis2602",
        email: "ttlam21@clc.fitus.edu.vn"
    },
    {
        id:3,
        source: bnnm,
        role: "Member",
        name: "Bui Nguyen Nhat Minh",
        dateOfBirth: "09/11/2003",
        mssv: "21127105",
        task: "Video Creator - Web Developer",
        personality: "S",
        facebook: "https://www.facebook.com/profile.php?id=100008058336519",
        linkedIn: "https://www.linkedin.com/in/nhat-minh-bui-nguyen-38bb17216/",
        github: "https://github.com/buiminh-afk",
        email: "bnnminh21@clc.fitus.edu.vn"
    },

    {
        id:4,
        source: hhp,
        role: "Member",
        name: "Huynh Hiep Phat",
        dateOfBirth: "31/01/2003",
        mssv: "21127130",
        task: "Game Developer",
        personality: "C",
        facebook: "https://facebook.com/babyne311",
        linkedIn: "https://www.linkedin.com/in/ph%C3%A1t-hu%E1%BB%B3nh-282545226/",
        github: "https://github.com/LazyBoy311",
        email: "hhphat21@clc.fitus.edu.vn"
    },
    {
        id:5,
        source: nhh,
        role: "Member",
        name: "Nguyen Hong Hanh",
        dateOfBirth: "19/10/2003",
        mssv: "21127503",
        task: "Secretary",
        personality: "D",
        facebook: "https://www.facebook.com/hnhnguyn1910",
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
        email: "nhhanh21@clc.fitus.edu.vn"
    },
    {
        id:6,
        source: lvnl,
        role: "Member",
        name: "Le Vu Ngan Lam",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Designer - Web Developer",
        personality: "C",
        facebook: "https://facebook.com/ngan.lam.357",
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
        email: "nganlamforwork@gmail.com",
    },
]

const description1 = "DSC is a group of 6 members from different personalities, and these personalities are called D, S, C according to the DISC multiple choice survey. Although we have only just known each other when entering this new University environment, we have also tried our best to unite, cooperate and develop."

const description2 = "Each team member is an extremely important link to connect everyone as well as work together to be able to make this product. This product is the passion and effort of the past few days and we have put a lot of expectations on it. Please get along with our team to the end to see the results!"