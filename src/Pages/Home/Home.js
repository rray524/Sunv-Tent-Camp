import React from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';
import Banner from './Banner/Banner';
import Expect from './Expect/Expect';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Sites from './Sites/Sites';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Intro></Intro>
            <Expect></Expect>
            <Sites></Sites>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;