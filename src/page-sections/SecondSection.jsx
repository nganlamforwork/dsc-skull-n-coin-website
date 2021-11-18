import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

//avatars
import tbk from '.././img/tbk.jpg';
import ttl from '.././img/ttl.jpg';
import bnnm from '.././img/bnnm.jpg';
import hhp from '.././img/hhp.jpg';
import nhh from '.././img/nhh.jpg';
import lvnl from '.././img/lvnl.jpg';
import backgroundImg from '.././img/study.png';

const useStyles = makeStyles(theme =>({
    root:{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        textAlign: "center",
        paddingTop: "8%"
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
    gridContainer:{
        margin: "50px 10%"
    },
    cardItem: {
        padding:"12% 5%",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.4s ease-in-out",
        "& p":{
            margin:10
        },
        "&:hover":{
            transform: "translateY(-20px)",
            boxShadow: "0 20px 60px rgba(255, 255, 255, 0.3)"
        }
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        cursor: "pointer",
        "&:hover":{
            transform: "scale(1.1)",
            transition: ".4s ease-in-out",
        }
    },
    readMoreButton:{
        marginTop:"10%",
        backgroundColor: "white !important",
        color: "#181818 !important",
        borderRadius: "0px !important",
        border: "1px solid #181818",
        padding: "10px 30px !important",
        textTransform: "none !important",
        fontSize: "16px !important",
        fontFamily: " 'Quicksand', sans-serif",
        transition: ".4s ease-in-out",
        "&:hover": {
            backgroundColor: "#181818 !important",
            color: "white !important",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px !important",
          padding: "6px 20px !important",
          minWidth: "110px !important"
        },
    },
}));

export default function SecondSection() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root} id="members">
        <div className={classes.Header}>
            <h1 className={classes.mainHeader} >DSC TEAM</h1>
            <h4 className={classes.subHeader}>Mô tả sơ lược về thông tin cá nhân cũng như các hoạt động công việc của từng thành viên trong nhóm</h4>
        </div>
        <div  className={classes.gridContainer}>
            <Grid container spacing={6}>
                {infos.map(info => (
                    <Grid item className={classes.gridItem} key={info.id} xs={12} sm={6} md={4} >
                        <Card className={classes.cardItem}>
                            <Avatar alt="avatar" src={info.source} className={classes.large} />
                            <h2> {info.name}</h2>
                            <p><strong>MSSV:</strong> {info.mssv}</p>
                            <p><strong>Ngày sinh:</strong> {info.dateOfBirth}</p>
                            <p><strong>Tính cách:</strong> {info.personality}</p>
                            <p><strong>Công việc:</strong> {info.task}</p>
                            <Button className={classes.readMoreButton}>Read More</Button>
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
        name: "Trần Bình Kha",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Leader",
        personality: "C"
    },
    {
        id:2,
        source: ttl,
        name: "Trần Tùng Lâm",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Game Developer",
        personality: "C"
    },
    {
        id:3,
        source: bnnm,
        name: "Bùi Nguyễn Nhật Minh",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Game Developer",
        personality: "C"
    },

    {
        id:4,
        source: hhp,
        name: "Huỳnh Hiệp Phát",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Game Developer",
        personality: "C"
    },
    {
        id:5,
        source: nhh,
        name: "Nguyễn Hồng Hạnh",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Designer",
        personality: "C"
    },
    {
        id:6,
        source: lvnl,
        name: "Lê Vũ Ngân Lam",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Designer",
        personality: "C"
    },
]