import React from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemText from '@material-ui/core/ListItemText';
//logo
import logo from ".././img/dsc-logo.png"
const drawerWidth = 240;
const useStyles = makeStyles(theme =>({
    root:{
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        position: "fixed",
        top: "0",
        zIndex: 1000,
        backgroundColor:"#181818",
    },
    navbarContainer:{
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 8%",
        [theme.breakpoints.down("md")]: {
            margin: "10px 5%",
        },
    },
    navbarContent:{
        display:"flex",
        alignItems: "center"
    },
    logo:{
        "& img":{
            height: 56,
            [theme.breakpoints.down("sm")]: {
                height: 40,
            },
        }
    },
    links:{
        "& a":{
            textDecoration: "none",
            color: "white",
            margin: "20px",
            fontSize: "18px"
        },
        marginRight: "60px"
    },
    startButton:{
        backgroundColor: "#F9DB01 !important",
        color: "black !important",
        borderRadius: "26px !important",
        minWidth: "140px !important",
        padding: "8px 22px !important",
        height: "40px !important",
        textTransform: "none !important",
        fontSize: "16px !important",
        "&:hover": {
            backgroundColor: "#F9DB01 !important",
            color: "black !important",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px !important",
          padding: "6px 20px !important",
          minWidth: "110px !important"
        },
    },


    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "black",
        color: "white"
    },
    drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    },
    linkDrawer:{
        textDecoration: "none",
        color: "white",
        fontSize: 15
    }
}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
    <div className={classes.root}>
        <div className={classes.navbarContainer}>
            <div className={classes.logo}><img src={logo} alt="logo"/></div>
            <Hidden only={['xs', 'sm']}>
                <div className={classes.navbarContent}>
                    <div className={classes.links}>
                        {navLinks.map(link=>(
                            <a href={link.url}>{link.title}</a>
                        ))}
                    </div>
                    {/* <Button className={classes.startButton}>Get Started</Button> */}
                </div>
            </Hidden> 
            <Hidden only={['md', 'lg', 'xl']}>
                <IconButton
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                    style = {{padding: 0}}
                >
                    <MenuIcon style = {{color: "white", fontSize: 28}}/>
                </IconButton>
            </Hidden>     
        </div>  

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{paper: classes.drawerPaper,}}
            style = {{zIndex: 10000}}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ClearIcon style = {{color: "white", fontSize: 26}}/>
                </IconButton>
            </div>
            <List>
                {navLinks.map((link) => (
                    <ListItem button key={link.title}>
                        <a className={classes.linkDrawer} href={link.url}>{link.title}</a>
                    </ListItem>
                ))}
                <ListItem><Button className={classes.startButton}>Get Started</Button></ListItem>
            </List>
        </Drawer>
    </div>
    )
}

const navLinks = [
    {
        title: "Home",
        url: "/#"
    },
    {
        title: "Members",
        url: "/#members"
    },
    {
        title: "Project",
        url: "/#project"
    },
    {
        title: "Document",
        url: "/#document"
    },
    {
        title: "Contact",
        url: "/#contact"
    },
]