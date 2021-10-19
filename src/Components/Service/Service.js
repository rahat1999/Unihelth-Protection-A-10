import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./service.css"
const Service = ({ service }) => {
    const { id, img, details1, serviceName } = service;
    // console.log(serviceName)
    return (
        <div>
            <Col>
                <Card className='p-2 text-center serviceCard'>
                    <div className='border-bottom'> <Card.Img style={{ height: '200px' }} variant="top" src={img} alt="service_Image" /></div>
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>{details1.slice(0, 110)}</Card.Text>
                        <Link to={`/details/${id}`}>
                            <span>
                                <Button className="w-50" variant="warning">Details</Button>{' '}
                            </span>
                        </Link>
                    </Card.Body >



                </Card>
            </Col>

        </div >
    );
};

export default Service;