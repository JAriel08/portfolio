import React from 'react';
import "../About/about.css";
import photo from "../About/assets/images/JAL.png";
import Skills from './Skills';

const About = () => {
    return (
        <section className='about-section' id='about'>
            <div className="about-container">
                <div className="title">
                    <span>WHO AM I?</span>
                </div>
                <div className="about-me">
                    <div className="about-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <div className="description">
                            <span>
                                Hi, I am John Ariel Lalap and I am a Front-End Developer who specializes in HTML, CSS, JavaScript, and React. Also, I have some basic knowledge on Back-End technologies such as Node.js, Express, and MySQL. 
                            </span>
                            <span>I learned all this at the bootcamp I attended called "KodeGo". In 3 months of studying there, I developed my hard skills and soft skills by building real-world projects and by working with other people. </span><br/>

                            <span>Moreover, I have a goal of becoming a Full Stack Developer once I gain a lot of experience working in this industry. Also, I will keep on studying in order to reach it. </span><br/>
                            <span>
                                What are you waiting for? Let’s make something special now!
                            </span>
                        </div>
                        <div className="about-button">
                            <a href='#connect'><button>Hire Me!</button></a>
                        </div>
                    </div>
                    <div className="about-image" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800">
                        <img src={photo} alt='photo'/>
                    </div>
                </div>
                <div className='about-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                    <div className='my-skills'>
                        <span >My Skills</span>
                    </div>
                    <Skills/>
                </div>
            </div>
        </section>
    )
}

export default About
