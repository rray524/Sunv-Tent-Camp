import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="card-container">
            <Container>
                <h2 className="text-center mb-5" style={{
                    fontFamily: "'Kaushan Script', cursive", fontSize: "4vw"
                }}>Start Exploring</h2>
                <Row>

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;