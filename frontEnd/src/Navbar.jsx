import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">NeedModelsIndia.in</div>
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
