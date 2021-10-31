import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../imgs/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div id="header">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav.Link as={Link} className="logo-img" to="/"><img src={logo} alt="" /></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/way">Ways To Stay</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/bucket">My Bucket</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage Orders</Nav.Link>
                            <Nav.Link as={Link} to="/camp">Add New Camp Pack</Nav.Link>
                            <Nav.Link as={Link} to="/">Rahul Ray</Nav.Link>
                            <Button variant="warning" className="ms-2">Log Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;