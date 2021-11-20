import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DocumentTab from './components/DocumentTab.jsx';

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "8%",
    },
    mainHeader:{
        fontSize: 60,
        letterSpacing: "0.2px",
        marginBottom: 14
    },
    subHeader:{
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "lighter",
        margin: "0 30%",
        marginBottom: "6%"
    },
    gallery:{
        margin: "auto 20%",
        color: "black"
    }
}));

export default function FifthSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="document">
        <div className={classes.Header}>
            <h1 className={classes.mainHeader} >DOCUMENTS</h1>
            <h4 className={classes.subHeader}>
                Sau đây là các hồ sơ, tài liệu của nhóm trong quá trình
                thực hiện dự án, bao gồm: bảng kế hoạch đồ án, biên bản họp nhóm,...
            </h4>
        </div>
        <div className={classes.gallery}>
            <DocumentTab />
        </div>
    </div>
    )
}

