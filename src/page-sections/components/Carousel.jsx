import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../img/tutorials/1.png'
import img2 from '../../img/tutorials/2.png'
import img3 from '../../img/tutorials/3.png'
import img4 from '../../img/tutorials/4.png'
import img5 from '../../img/tutorials/5.png'
import img6 from '../../img/tutorials/6.png'
import img7 from '../../img/tutorials/7.png'

export default function DemoCarousel() {
    return (
        <Carousel autoPlay="true" infiniteLoop="true" interval={4000}>
            {pages.map(page=>(
                <div key={page.id}>
                    <img src={page.source} alt="tutorial pages"/>
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
