import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

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
        },
        "& h2":{
            marginBottom: 0
        },
        "& h3":{
            marginTop: "2%"
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
    facebookIcon:{
        fontSize: 40,
        marginTop:"7%",
        textDecoration: "none",
        transition: ".4s ease-in-out",
        color: "#181818",
        "&:hover": {
            transform: "scale(1.3)",
        },
    },
    emailIcon:{
        fontSize: 42,
        marginTop:"7%",
        textDecoration: "none",
        transition: ".4s ease-in-out",
        color: "#181818",
        "&:hover": {
            transform: "scale(1.3)",
        },
    }
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
                            <h3>{info.role}</h3>
                            <p><strong>Student ID:</strong> {info.mssv}</p>
                            <p><strong>Date of birth:</strong> {info.dateOfBirth}</p>
                            <p><strong>Personality:</strong> {info.personality}</p>
                            <p><strong>Position in project:<br/></strong> {info.task}</p>
                            <div>
                                <a className={classes.icons} href={info.facebook} target="_blank" >
                                    <FacebookIcon className={classes.facebookIcon} />
                                </a>
                                
                                {/* <a className={classes.icons} href={`mailto:${info.email}`} target="_blank" >
                                    <EmailIcon className={classes.emailIcon} />
                                </a> */}
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
        name: "Trần Bình Kha",
        role: "Leader",
        dateOfBirth: "16/09/2003",
        mssv: "21127065",
        task: "Game Developer",
        personality: "D",
        facebook: "https://facebook.com/trankha1609",
        email: "tbkha21@clc.fitus.edu.vn"
    },
    {
        id:2,
        source: ttl,
        role: "Member",
        name: "Trần Tùng Lâm",
        dateOfBirth: "26/02/2003",
        mssv: "21127337",
        task: "Game Developer",
        personality: "D",
        facebook: "https://facebook.com/tunglam.262",
        email: "ttlam21@clc.fitus.edu.vn"
    },
    {
        id:3,
        source: bnnm,
        role: "Member",
        name: "Bùi Nguyễn Nhật Minh",
        dateOfBirth: "09/11/2003",
        mssv: "21127105",
        task: "Video Creator - Web Developer",
        personality: "S",
        facebook: "https://www.facebook.com/profile.php?id=100008058336519",
        email: "bnnminh21@clc.fitus.edu.vn"
    },

    {
        id:4,
        source: hhp,
        role: "Member",
        name: "Huỳnh Hiệp Phát",
        dateOfBirth: "31/01/2003",
        mssv: "21127130",
        task: "Game Developer",
        personality: "C",
        facebook: "https://facebook.com/babyne311",
        email: "hhphat21@clc.fitus.edu.vn"
    },
    {
        id:5,
        source: nhh,
        role: "Member",
        name: "Nguyễn Hồng Hạnh",
        dateOfBirth: "19/10/2003",
        mssv: "21127503",
        task: "Secretary",
        personality: "D",
        facebook: "https://www.facebook.com/hnhnguyn1910",
        email: "nhhanh21@clc.fitus.edu.vn"
    },
    {
        id:6,
        source: lvnl,
        role: "Member",
        name: "Lê Vũ Ngân Lam",
        dateOfBirth: "21/04/2003",
        mssv: "21127334",
        task: "Designer - Web Developer",
        personality: "C",
        facebook: "https://facebook.com/ngan.lam.357",
        email: "lvnlam21@clc.fitus.edu.vn"
    },
]