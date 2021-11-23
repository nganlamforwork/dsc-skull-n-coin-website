import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import DocumentTab from './components/DocumentTab.jsx';

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "8%",
        [theme.breakpoints.down("xs")]: {
            paddingTop: "20%",
        },
    },
    mainHeader:{
        fontSize: 60,
        letterSpacing: "0.2px",
        marginBottom: 14,
        [theme.breakpoints.down("xs")]: {
            fontSize:40
        },
    },
    subHeader:{
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "lighter",
        margin: "0 30%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {
            margin: "5% 20%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "5% 10%",
        },
    },
    gallery:{
        margin: "auto 20%",
        color: "black",
        [theme.breakpoints.down("sm")]: {
            margin: "auto 6%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "auto 4%",
        },
    }
}));

export default function FifthSection() {
    const classes = useStyles();

    return (
    <div className={classes.root} id="document">
        <div className={classes.Header}>
            <h1 className={classes.mainHeader} >DOCUMENTS</h1>
            <h4 className={classes.subHeader}>
                The following are the group's files and documents during the project implementation, including: project plan table, group meeting minutes,...
            </h4>
        </div>
        <div className={classes.gallery}>
            <DocumentTab />
        </div>
    </div>
    )
}

