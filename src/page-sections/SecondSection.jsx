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
        [theme.breakpoints.down("sm")]: {
            marginTop:20
        },
    },
    subHeader:{
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "lighter",
        margin: "0 30%",
        marginBottom: "6%"
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
            
        },
        "& p":{
            fontSize:"1.15rem",
            lineHeight: "1.7rem",
            [theme.breakpoints.down("sm")]: {
                fontSize:"1rem",
                lineHeight: "1.2rem",
            },
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
                <p>{description2}</p>
                <p>Và sau đây là danh sách 6 thành viên của nhóm với một số thông tin cơ bản!</p>
            </div>
        </div>
        <h3 className={classes.mainHeader}>MEMBERS</h3>
        <div className={classes.gridContainer}>
            <Grid container spacing={6}>
                {infos.map(info => (
                    <Grid item className={classes.gridItem} key={info.id} xs={12} sm={6} md={4} >
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
        name: "Trần Bình Kha",
        role: "Leader",
        dateOfBirth: "16/09/2003",
        mssv: "21127065",
        task: "Game Developer",
        personality: "D",
        facebook: "https://facebook.com/trankha1609",
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
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
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
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
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
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
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
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
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
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
        linkedIn: "https://www.linkedin.com/in/lam-le-30a39821a/",
        github: "https://github.com/nganlamforwork",
        email: "nganlamforwork@gmail.com",
    },
]

const description1 = "DSC là nhóm tập hợp gồm 6 thành viên tới từ những tính cách khác nhau, và những tính cách ấy gọi tắt là D, S, C theo khảo sát trắc nghiệm DISC. Tuy tụi mình cũng chỉ mới quen biết nhau khi bước vào môi trường đại học này nhưng tụi mình cũng đã nỗ lực hết sức để đoàn kết, hợp tác và phát triển."

const description2 = "Từng thành viên trong nhóm là 1 mắt xích vô cùng quan trọng để kết nối tất cả mọi người cũng như hợp sức để có thể làm ra sản phẩm này. Sản phẩm này là tâm huyết, là nỗ lực bao ngày qua và tụi mình đã đặt rất nhiều kỳ vọng vào nó. Các bạn hãy cùng nhóm tụi mình đi tới cuối để xem thành quả nhé!"