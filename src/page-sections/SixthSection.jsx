import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "8%",
        paddingBottom: "10%",
        [theme.breakpoints.down("xs")]: {
            paddingTop: "20%",
        },
    },
    mainHeader:{
        fontSize: 60,
        letterSpacing: "0.2px",
        marginBottom: 14
    },
    gridContainer:{
        margin:"5% 10%",
        [theme.breakpoints.down("sm")]: {
            margin: "5% 25%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "5% 10%",
        },
    },
    cardItem: {
        borderRadius: 16,
        padding: "5%",
        border: "1px solid white",
        transition: "0.4s ease-in-out",
        backgroundColor:"#181818",
        display: "flex",
        alignItems: "center",
        textAlign:"left",
        color:"white",
        height:"100%",
        filter: "grayscale(1)",
        "& p":{
            margin:"3% 0"
        },
        "&:hover":{
            transform: "translateY(-16px)",
            boxShadow: "0 10px 40px rgba(255, 255, 255, 0.3)",
            filter: "grayscale(0)",
        },
        "& h4":{
            margin:"6% 0",
            fontSize:"1.5rem",
            fontWeight: 700
        }
    },
    icon:{
        marginRight: "5%",
        "& img":{
            width: "5rem"
        },
    },
    gridItem:{
        display:"flex",
        flexDirection:"column",
        flexGrow:1,
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
          fontSize: "18px !important",
          padding: "10px 22px !important",
          minWidth: "110px !important"
        },
    },
    links:{
        textDecoration: "none"
    }
}));

export default function SixthSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="contact">
        <h1 className={classes.mainHeader} >CONTACT US</h1>
        <div  className={classes.gridContainer}>
            <Grid container spacing={6}>
                <Grid item className={classes.gridItem} xs={12} md={4} >
                    <Card className={classes.cardItem}>
                        <div className={classes.icon}>
                            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
                        </div>
                        <div className={classes.content}>
                            <h4>Phone numbers</h4>
                            <p>(+84) 898 142 114</p>
                            <p>(+84) 868 938 203</p>
                            <p>(+84) 523 905 693</p>
                        </div>
                    </Card>
                </Grid>
                <Grid item className={classes.gridItem} xs={12} md={4} >
                    <Card className={classes.cardItem}>
                        <div className={classes.icon}>
                            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
                        </div>
                        <div className={classes.content}>
                            <h4>Emails</h4>
                            <p><strong>Team: </strong>dscteamus@gmail.com</p>
                            <p><strong>Leader: </strong>tbkha21@clc.fitus.edu.vn</p>
                        </div>
                    </Card>
                </Grid>
                <Grid item className={classes.gridItem} xs={12} md={4} >
                    <Card className={classes.cardItem}>
                        <div className={classes.icon}>
                            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
                        </div>
                        <div className={classes.content}>
                            <h4>Adress</h4>
                            <p>227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
        <h1 className={classes.mainHeader} >GIVE US COMMENTS</h1>
        <a className={classes.links} href="https://dsc-contact-form.netlify.app/" target="_blank" rel="noreferrer">
            <Button className={classes.startButton}>CONTACT FORM</Button>
        </a>
    </div>
    )
}

