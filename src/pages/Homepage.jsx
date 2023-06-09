import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Connect from '../components/Connect/Connect';
import Footer from '../components/Footer/Footer';


const Homepage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Connect/>
            <Footer/>
        </>    
    )
}

export default Homepage
