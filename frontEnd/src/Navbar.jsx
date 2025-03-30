import React from 'react';
import './navbar.css';
import logo1 from './assets/logoImg1.png'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src={logo1} alt="logo 1" className="logo-image"/></div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Join Us</a>
            </div>
            <div className="buttons">
                <button className="sign-up">Sign Up</button>
                <button className="login">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
