import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

import img1 from '../../img/tutorials/1.png'
import img2 from '../../img/tutorials/2.png'
import img3 from '../../img/tutorials/3.png'
import img4 from '../../img/tutorials/4.png'
import img5 from '../../img/tutorials/5.png'
import img6 from '../../img/tutorials/6.png'
import img7 from '../../img/tutorials/7.png'

const useStyles = makeStyles(theme =>({
    arrow:{
        background: "transparent !important",
        borderRadius:999,
        color: "white",
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        cursor: 'pointer',
        width: 50,
        height:50,
        "&:hover":{
            color:"#757de8"
        },
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
    },
    imgItem: {
        padding: "0 10% 5% 10%",
        [theme.breakpoints.down("xs")]: {
            padding: "0 0 10% 0"
        },
    },
    icon:{
        fontSize: 30
    }
}));

export default function DemoCarousel() {
    const classes = useStyles();

    return (
        <Carousel autoPlay="true" infiniteLoop="true" 
            showThumbs="false" interval={4000} 
            statusFormatter={() => ``}
            renderThumbs={()=>``}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <Button 
                        className={classes.arrow}
                        onClick={onClickHandler} 
                        title={label} 
                        style={{left: "-2%" }}
                    >
                        <ArrowBackIosIcon className={classes.icon}/>
                    </Button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <Button 
                        className={classes.arrow}
                        onClick={onClickHandler} 
                        title={label} 
                        style={{right: "-2%" }}
                    >
                        <ArrowForwardIosIcon className={classes.icon}/>
                    </Button>
                )
            }
        >
            {pages.map(page=>(
                <div key={page.id}>
                    <img className={classes.imgItem} src={page.source} alt="tutorial pages"/>
                </div>
            ))}
        </Carousel>
    );
}

const pages = [
    {
        id:1,
        source: img1
    },
    {
        id:2,
        source: img2
    },
    {
        id:3,
        source: img3
    },
    {
        id:4,
        source: img4
    },
    {
        id:5,
        source: img5
    },
    {
        id:6,
        source: img6
    },
    {
        id:7,
        source: img7
    },
]
