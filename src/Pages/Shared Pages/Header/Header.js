import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../imgs/logo.png';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
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
                            {
                                user.displayName && <Nav.Link as={Link} to="/bucket">My Bucket</Nav.Link>
                            }
                            {
                                user.displayName && <Nav.Link as={Link} to="/manage">Manage Orders</Nav.Link>
                            }

                            {
                                user.displayName && <Nav.Link as={Link} to="/camp">Add New Camp Pack</Nav.Link>
                            }

                            {
                                user.displayName || <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            {
                                user.displayName && <Nav.Link as={Link} to="/">{user.displayName}</Nav.Link>
                            }
                            {
                                user.displayName && <Button variant="warning" className="ms-2" onClick={logout}>Log Out</Button>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;