import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../imgs/Banner-1.jpg';
import Banner2 from '../../../imgs/Banner-2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Tent Camping Sites
                    </h1>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Tent Camping Sites
                    </h1>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;