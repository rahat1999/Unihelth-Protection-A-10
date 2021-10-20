import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Covid from '../Covid-19/Covid';
// import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Covid></Covid>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;