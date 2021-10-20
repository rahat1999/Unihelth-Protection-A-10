import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from "../../Images/banner/banner111.png";
import img2 from "../../Images/banner/banner002.jpg";
import img3 from "../../Images/banner/banner333.jpg";
import "./banner.css"

const Banner = () => {
    return (
        <Container>


            <Carousel className='mt-5'>
                <Carousel.Item>
                    <img

                        className="d-block w-100 imgContainer"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='covidinfo'>
                        <h2>Covid-19 Help</h2>
                        <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgContainer"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='covidinfo'>
                        <h2 className=''>Doctors</h2>
                        <h4>Whatever you do, do with determination. You have one life to live; do your work with passion and give your best. </h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 imgContainer"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='covidinfo'>
                        <h2 className=''>Treatments</h2>
                        <h4>We Provide our Best Treatment here, we take care oure pataint. consectetur adipiscing elit.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
};

export default Banner;