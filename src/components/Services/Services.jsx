import React from 'react';
import { services } from './servicesList';
import "../Services/services.css";

const Services = () => {
    return (
        <section className='services-section '>
            <div className="services-container">
                <div className='services-title' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                    <span>MY <span className='highlight'>SERVICES</span></span>
                    <div className='title-underline'></div>
                </div>
                <div className="services-cards-container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    {services.map((service) => {
                        const {logo, title, description} = service;
                        return (
                            <div className="card">
                                <div className="card-top">
                                    <div className="card-logo">
                                        <span>{logo}</span>
                                    </div>
                                    <div className="card-title">
                                        <span>{title}</span>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div className="card-desc">
                                        <span>{description}</span>
                                    </div>
                                </div>
                            </div>
                    )
                    })}
                </div>
            </div>
            
        </section>
    )
}

export default Services
