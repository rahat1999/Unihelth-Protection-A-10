import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, LogOut } = useAuth()
    return (
        <Navbar className="" collapseOnSelect expand="lg" bg="dark" variant="dark fixed-top">
            <Container>
                <Navbar.Brand><i className="fas fa-clinic-medical"></i> UniHealth Protection </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/covid-19#covid">Covid-19</Nav.Link>
                        <Nav.Link as={Link} to="/cotact#contacts">Contacts</Nav.Link>
                    </Nav>
                    <Nav style={{ alignItems: "center" }}>
                        {user?.email ? <span className='text-primary inline'>{user?.displayName}</span> : ""}
                        {
                            user?.email ? <Nav.Link onClick={LogOut}><i className="fas fa-sign-out-alt"></i>LogOut</Nav.Link>
                                : <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;