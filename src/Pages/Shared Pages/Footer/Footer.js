import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import partner1 from '../../../imgs/partner-1.png';
import partner2 from '../../../imgs/partner-2.png';
import partner3 from '../../../imgs/partner-3.png';

const Footer = () => {
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
    return (
        <div id="footer">
            <div className="footer-initial">
                <h4 className="text-center fw-bold" style={{ marginBottom: "85px" }}>PROUD SUPPORTER OF:
                </h4>
                <Container>
                    <Row>
                        <Col xs={12} md={4} className="text-center">
                            <img src={partner1} className="national-partner" alt="" />
                        </Col>
                        <Col xs={12} md={4} className="text-center">
                            <img src={partner2} className="brain" alt="" />
                        </Col>
                        <Col xs={12} md={4} className="text-center">
                            <img src={partner3} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-center">
                <Container>
                    <Row>
                        <Col xs={12} md={4} style={{ borderRight: "1px solid rgba(255, 255, 255, 0.08)" }}>
                            <h3 className="text-warning">AT SUNV TENT CAMP</h3>
                            <p className="text-white">Our goal is to provide an exceptional guest experience with a fun and friendly atmosphere, bountiful amenities and irresistible local attractions. Experience planned activities, social events and live entertainment or stay energized with a wonderful variety of world-class amenities. We look forward to seeing you soon!</p>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className="footer-contact">
                                <div className="location">
                                    <div className="icon">
                                        {map}
                                    </div>
                                    <div className="details">
                                        <h4 className="text-warning">27777 FRANKLIN
                                        </h4>
                                        <h4 className="text-white">Southfield, MI 48034</h4>
                                    </div>
                                </div>
                                <div className="phone">
                                    <div className="icon">
                                        {phone}
                                    </div>
                                    <div className="details">
                                        <h4 className="text-warning">(888-8888765)
                                        </h4>
                                        <h4 className="text-white">7 Days, 8am-12am EST</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright">
                <p className="text-center">© 2021 Sunv Tent Camp. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;