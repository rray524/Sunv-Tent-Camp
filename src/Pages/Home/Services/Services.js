import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import Flip from 'react-reveal/Flip';


const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            });
    }, [])
    if (loading) {
        return (
            <div className="spinner text-center" style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', right: '0', bottom: '0' }}>
                <Spinner animation="grow" variant="warning" />
            </div>
        )
    }
    return (
        <div className="card-container">
            <Container>
                <Flip top cascade>
                    <h2 className="text-center mb-5" style={{
                        fontFamily: "'Kaushan Script', cursive", fontSize: "4vw"
                    }}>Start Exploring</h2>
                </Flip>
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