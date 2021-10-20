import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="my-5">
            <br />
            <Container>
                <h2 id="contacts" className="text-primary mb-5 text-center"><i className="fas fa-id-card-alt"></i>  <b>Contact Us</b> </h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col >
                        <Card className="contact_container">
                            <Card.Body>
                                <Card.Title><b>LATEST NEWS
                                </b></Card.Title>
                                <hr />
                                <Row xs={1} className="g-1">
                                    <Col>
                                        <h6>
                                            <i className="fas fa-laptop-medical fs-4"></i> Top Technology Innovations</h6>
                                        <div>
                                            <p className="text-secondary">January 12, 2021</p>
                                        </div>
                                        <div> <h6>
                                            <i className="far fa-eye fs-4"></i> Regular Eye Examinations</h6>
                                            <p className="text-secondary">January 12, 2021</p></div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="contact_container">
                            <Card.Body>
                                <Card.Title><b>CONTACT INFORMATION</b></Card.Title>
                                <hr />
                                <Row xs={1} className="g-1">
                                    <Col>
                                        <div>
                                            <p className="">
                                                <i className="fas fa-phone"></i>     Phone: 1-800-700-6200
                                            </p>
                                            <p className="">
                                                <i className="fas fa-paper-plane"></i> E-mail: uniheal.info@gmail.com
                                            </p>
                                        </div>
                                        <div>
                                            <p><i className="fas fa-map-marker-alt"></i> Address: <br />
                                                Open 24/7,Dhaka,Bangladesh</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="contact_container">
                            <Card.Body>
                                <Card.Title><b>LOOKING FOR A GOOD DOCTOR?</b></Card.Title>
                                <hr />
                                <Row xs={1} className="g-1 pb-1">
                                    <Col>
                                        <div>
                                            <p className="text-secondary">
                                                <i className="fas fa-user-md"></i> Our seasoned and skilled team of physicians and practical nurses will leave no chance for any disease to survive!
                                            </p>
                                        </div>
                                        <div>
                                            <Button variant="warning">
                                                <i className="far fa-calendar-check"></i>  Make A Appoinment</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </div >
    );
};

export default Contact;