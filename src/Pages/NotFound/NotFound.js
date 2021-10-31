import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImg from '../../imgs/404.jpg'
import Header from '../Shared Pages/Header/Header';
import './NotFound.css'
const NotFound = () => {
    return (
        <div id="not-found">
            <Header></Header>
            <Container className="my-5 text-center">
                <img className="error-img" src={errorImg} alt="" />
                <div className="redirect-button my-5">
                    <Link to="/">
                        <Button className="redirect-btn" variant="secondary" size="lg">
                            Return To Home
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;