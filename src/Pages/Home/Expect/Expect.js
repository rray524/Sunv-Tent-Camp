import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Expect.css';
import expect from '../../../imgs/expect.jpg'

const Expect = () => {
    return (
        <div className="expect-wrap">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="text-center">
                        <img src={expect} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 className="text-center text-warning mt-3">
                            WHAT TO EXPECT
                        </h4>
                        <p>
                            Traditional tent camping is a wonderful way to get back in touch with nature, plus it’s a wonderful way to strengthen bonds with family and friends. Our tent camping sites are centrally located nearby on-site bathhouses with hot showers and all of the great amenities that are available. Gather around the campfire for a rustic cookout meal or practice your stellar storytelling abilities!
                        </p>
                        <div className="service-point">
                            <ul>
                                <li>20/30/50-Amp Service</li>
                                <li>Grassy Sites</li>
                                <li>Waterfront Sites</li>

                            </ul>
                            <ul>
                                <li>Picnic Table</li>
                                <li>Fire Ring</li>
                                <li>Sun WiFi Available</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Expect;