import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, img, description, price } = props.service;
    return (
        <Col xs={12} md={4} style={{ marginBottom: '21px' }}>
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
                        <Button variant="warning" style={{ borderRadius: '0px' }}>Book Now</Button>
                        <Button variant="warning" style={{ borderRadius: '0px' }}>$ {price}/Night</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;