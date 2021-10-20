import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import "./About.css"

const About = () => {

    return (
        <>
            <div className="text-center  about">
                <h2 className=" fw-bold text-center" >About Us</h2>

                <p>An offline-first electronic health record (EHR) and hospital information system (HIS) web application. HospitalRun is built to provide the most modern information system possible to the least resourced environments.</p>
            </div>
            <Container>

                <Row xs={1} md={2} lg={4} className="g-4 my-5 ">
                    <Col>
                        <Card className="about-section">

                            <i className="fas fa-leaf about-icon"></i>
                            <Card.Body>
                                <Card.Title>Professional</Card.Title>
                                <Card.Text>
                                    We bring the right people together to challenge
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="about-section">
                            <i className="fas fa-cloud-upload-alt about-icon"></i>
                            <Card.Body>
                                <Card.Title>Update</Card.Title>
                                <Card.Text>
                                    We bring the right people together to challenge
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="about-section">
                            <i className="fas fa-sun about-icon"></i>
                            <Card.Body>
                                <Card.Title>Guranteed</Card.Title>
                                <Card.Text>
                                    We bring the right people together to challenge
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="about-section">
                            <i className="fas fa-paperclip about-icon"></i>
                            <Card.Body>
                                <Card.Title>Trusted</Card.Title>
                                <Card.Text>
                                    We bring the right people together to challenge
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
};

export default About;