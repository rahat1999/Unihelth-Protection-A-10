import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Covid from '../Covid-19/Covid';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Covid></Covid>
            <About></About>
        </div>
    );
};

export default Home;