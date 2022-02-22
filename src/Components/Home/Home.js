import React from 'react';
import Navbar from './../Navbar/Navbar';
import BrandSection from './BrandSection/BrandSection';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import OurWork from './OurWork/OurWork';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <BrandSection/>
            <Services/> 
            <OurWork/>
            <ClientFeedback/>
            <Contact/>
        </div>
    );
};

export default Home;