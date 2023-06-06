import React from 'react';
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';



const Navbar = () => {
    
    return (
        <header>
            <div className="header-container">
                <div className="left-side">
                    <span>Portfolio</span>
                </div>
                <div className="right-side">
                    <ul>
                        <li className='nav-item'>
                            <a href="#home">Home</a>
                        </li> 
                        <li className='nav-item'>
                            <a href="#about">About</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#services" >Services</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#connect"> Connect</a>
                        </li>
                    </ul>
                </div>
                <FaBars className='fa-bars'/>
            </div>
        </header>
    )
}

export default Navbar
