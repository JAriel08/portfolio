import React from 'react';
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import logo from "../Navbar/assets/logo.png";



const Navbar = () => {

    const [openBurger, setOpenBurger] = useState(false);
    
    return (
        <header>
            <div className="header-container">
                <div className="left-side">
                    <img src={logo} alt="" />
                </div>
                <div className="right-side">
                    <ul id={openBurger ? "" : "hidden"}>
                        <li className='nav-item' onClick={() => {setOpenBurger(false)}}>
                            <a href="#home">Home</a>
                        </li> 
                        <li className='nav-item' onClick={() => {setOpenBurger(false)}}>
                            <a href="#about">About</a>
                        </li>
                        <li className='nav-item' onClick={() => {setOpenBurger(false)}}>
                            <a href="#services" >Services</a>
                        </li>
                        <li className='nav-item' onClick={() => {setOpenBurger(false)}}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='nav-item' onClick={() => {setOpenBurger(false)}}>
                            <a href="#connect"> Connect</a>
                        </li>
                    </ul>
                </div>
                <span className='fa-bars ' onClick={() => {setOpenBurger(!openBurger)}}>
                    {openBurger ? <FaTimes/> : <FaBars/>}
                </span>
                
            </div>
        </header>
    )
}

export default Navbar
