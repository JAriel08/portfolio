import React from 'react';
import "../Connect/connect.css";
import ConnectForm from './ConnectForm';

const Connect = () => {
    return (
        <section className='connect-section' id='connect' >
            <div className="connect-container">
                <div className="connect-left-side" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                    <div className="connect-title">
                        <span>CONNECT WITH ME</span>
                    </div>
                    <div className='connect-text'> 
                        <div className='desc'>
                            <span>Your final impact statement goes here. Let’s work together and  make it memorable!</span>
                        </div>
                        <div className='text-contact'>
                            <div className="contact-item">
                                <span>Address</span>
                                <span>Los Banos, Laguna</span>
                            </div>
                            <div className="contact-item">
                                <span>Contact Number</span>
                                <span>0948-232-5311</span>
                            </div>
                            <div className="contact-item">
                                <span>Email Address</span>
                                <span>jalalap08@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="connect-right-side" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                    <ConnectForm/>
                </div>
            </div>
        </section>
    )
}

export default Connect
