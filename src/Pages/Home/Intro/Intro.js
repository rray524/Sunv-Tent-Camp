import React from 'react';
import { Container } from 'react-bootstrap';
import './Intro.css';
import background from '../../../imgs/bg.png'

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: `url(${background})`, backgroundSize: 'auto' }}>
            <Container>
                <h2 className="text-center">
                    Tent Camping Sites
                </h2>
                <p className="text-center intro-para">
                    There’s nothing quite like pitching a tent out in the great outdoors, and for camping purists, tent camping is the only way to go. But you don’t have to rough it if you don’t want to. We offer a great selection of primitive tent sites, or you can choose to have a site with extra features like water and electric service. Most sites come with a picnic table, fire ring and our Sun WiFi service.
                </p>
            </Container>
        </div>
    );
};

export default Intro;