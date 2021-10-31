import React from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Intro></Intro>
            <Footer></Footer>
        </div>
    );
};

export default Home;