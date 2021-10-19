import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Doctor.css"

const Doctor = ({ doctor }) => {
    // console.log(doctor)
    const { drName, img, city, expert } = doctor;
    return (
        <div>
            <Col>
                <div className='doctor_container '>
                    <div className='container_image'>
                        <Card.Img variant="top" src={img} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title><i className="fas fa-user-md"></i> {drName}</Card.Title>
                            <Card.Text>
                                <i className="far fa-stop-circle"></i>  {expert}
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-map-marker-alt"></i>{city}
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Doctor;