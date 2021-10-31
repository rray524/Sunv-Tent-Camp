import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WayToStay.css';
import stay from '../../imgs/stay.jpg'
import Header from '../Shared Pages/Header/Header';
import Footer from '../Shared Pages/Footer/Footer';

const WayToStay = () => {
    return (
        <div className="way_to_stay">
            <Header></Header>
            <Container className="solo-container">
                <p className="stay-para">At Sunv Tent Camp, we believe in the next level of camping and RVing with a host of standard conveniences that set our parks a step above the rest. Here are just a few of the services we offer to our guests:</p>
            </Container>


            <Container>
                <Row>
                    <Col xs={12} md={6} className="text-center">
                        <img src={stay} className="stay-img" alt="" />
                    </Col>
                    <Col xs={12} md={6} className="stay-para mt-2">
                        <p className="stay-para">- Hot showers anyone? Our bathhouses are clean, convenient, and always close by. And after a few sticky (or stinky) days and nights, this is an amenity that all campers really come to appreciate. Showers are coin-operated at select locations, so make sure to check in with your campground of choice before your arrival.</p>

                        <p className="stay-para">- Water, water, everywhere! If you’re staying on a campsite without any hookups, fresh water is available to guests at designated spigots located within close proximity of these camping areas.</p>

                        <p className="stay-para">- Laundry facilities offer an easy solution to clean your clothes right on-site during your stay with us. Washers and dryers are generally coin-operated and many facilities include folding tables.</p>


                    </Col>
                    <Col xs={12} md={12}>
                        <p className="stay-para">- Convenience stores are available at many of our parks and carry an array of items from RV equipment to groceries, ice and propane. Many stores also include apparel and gift items as well, so you can take a memento as a keepsake of your time with us!</p>

                        <p className="stay-para">- Many of our locations offer snack bars for a quick bite or a sweet treat. We also have a number of parks that have on-site restaurants with full menus for breakfast, lunch and dinner.</p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default WayToStay;