import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../Images/banner/banner3.png";
import img2 from "../../Images/banner/banner201.png";
import img3 from "../../Images/banner/banner2.png";

const Banner = () => {
    return (
        <div>

            <>
                <Carousel className='mt-5'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-danger'>
                            <h3>Doctors</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='text-primary'>
                            <h3>Treatments</h3>
                            <p>We Provide our Best Treatment here, we take care oure pataint. consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='text-primary'>
                            <h3 className='text'>Covid-19 Help & Treatment</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;