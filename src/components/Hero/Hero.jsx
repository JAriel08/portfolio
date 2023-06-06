import React from 'react';
import "./hero.css";
import {FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";
import CV from "../Hero/assets/portfolio.pdf";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <section className='hero-section' id='home'>
            <div className="hero-container">
                <div className="hero-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">
                    <span>Welcome I'M</span>
                    <span>John Ariel Lalap</span>
                    <span>And I'm a 
                        
                    <Typewriter
                            words={[ ' Front-End Developer']}
                            loop={1}
                            typeSpeed={100}
                            delaySpeed={2000}
                        />
                    </span>
                </div>
                <div className="hero-socials" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800">
                    <a href="https://www.facebook.com/ariel.lalap"><FaFacebookF className='hero-social-item'/></a>
                    <FaGithub className='hero-social-item'/>
                    <FaLinkedinIn className='hero-social-item'/>
                </div>
                <div className='hero-button' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                    <a href={CV} download="LALAP_CV"><button>Download CV</button></a>
                </div>
            </div>
        </section>
    )
}

export default Hero
