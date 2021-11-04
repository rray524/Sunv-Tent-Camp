import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import Zoom from 'react-reveal/Zoom';

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    return (

        <Col xs={12} md={4} style={{ marginBottom: '21px' }}>
            <Zoom bottom>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title style={{
                            fontFamily: "'Kaushan Script', cursive", fontSize: "1.5vw"
                        }}>{name}</Card.Title>
                        <Card.Text style={{ margin: '27px 0px', letterSpacing: '2px' }}>
                            {description.slice(0, 150)}
                        </Card.Text>
                        <div className="button-flex">
                            <Link to={`/booking/${_id}`}>
                                <Button variant="warning" style={{ borderRadius: '0px' }}>Book Now</Button>
                            </Link>
                            <Button variant="warning" style={{ borderRadius: '0px' }}>$ {price}/Night</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>


    );
};

export default Service;