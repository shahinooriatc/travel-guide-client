import React from 'react';
import Examples from '../Examples/Examples';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import StayInTouch from '../StayInTouch/StayInTouch';

const Home = () => {
    return (
        <main className='container-fluid padding-zero' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Header />
            <Features />
            <Examples />
            <Services />
            <Reviews />
            <StayInTouch />
        </main>
    );
};

export default Home;