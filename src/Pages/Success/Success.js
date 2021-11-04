import React from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';
import './Success.css';
import placeOrderImg from '../../imgs/place-order.png'

const Success = () => {
    return (
        <div className="success-container">
            <Header></Header>
            <div className="container">
                <div className="solo-container text-center">
                    <img height='500' width="500" src={placeOrderImg} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Success;