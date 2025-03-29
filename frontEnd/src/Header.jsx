import React from 'react';
import Slider from 'react-slick';
import modelImage1 from './assets/landingPageImg1.jpg';
import modelImage2 from './assets/landingPageImg2.jpg';
import modelImage3 from './assets/landingPageImg3.jpg';
import modelImage4 from './assets/landingPageImg4.webp';
import modelImage5 from './assets/landingPageImg5.webp';
import modelImage6 from './assets/landingPageImg6.jpg';
import modelImage7 from './assets/landingPageImg7.jpg';
import modelImage8 from './assets/landingPageImg8.jpg';
import modelImage9 from './assets/landingPageImg9.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './header.css';

const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <header className="header">
                <Slider {...settings}>
                    <div>
                        <img src={modelImage1} alt="Model 1" className="header-image" />
                    </div>
                    <div>
                        <img src={modelImage2} alt="Model 2" className="header-image" />
                    </div>
                    <div>
                        <img src={modelImage3} alt="Model 3" className="header-image" />
                    </div>
                </Slider>
            </header>
            <div className="cards-container">
                <div className="card">
                    <img src={modelImage4} alt="Become a model" className="card-image" />
                    <h2>Become a model now</h2>
                    <ul>
                        <li>To begin with, apply now as a model</li>
                        <li>Then be contacted directly by clients in your area – or internationally</li>
                        <li>Apply for exciting jobs - from photoshoots to advertising campaigns</li>
                    </ul>
                    <button>Become A Model Now</button>
                </div>
                <div className="card">
                    <img src={modelImage5} alt="Book models" className="card-image" />
                    <h2>Book models directly</h2>
                    <ul>
                        <li>Register now as a client</li>
                        <li>Find suitable models for your model jobs now</li>
                        <li>Contact and book models directly online</li>
                    </ul>
                    <button>Find Models Now</button>
                </div>
            </div>

        <div className="featured-section">
                <h2 className="featured-title">Featured Models</h2>
                <p className="featured-subtitle">Here are a few of the featured freelancer models in fashion modeling</p>
            <div className="featured-cards-container">
                <div className="featured-card">
            <img src={modelImage6} alt="Model 6" className="featured-card-image" />
            <p className="featured-card-name">Sarique Ahmad</p>
                </div>
        <div className="featured-card">
            <img src={modelImage7} alt="Model 7" className="featured-card-image" />
            <p className="featured-card-name">Priyanka Varshney</p>
        </div>
        <div className="featured-card">
            <img src={modelImage8} alt="Model 8" className="featured-card-image" />
            <p className="featured-card-name">Alankrita Shahi</p>
        </div>
        <div className="featured-card">
            <img src={modelImage9} alt="Model 9" className="featured-card-image" />
            <p className="featured-card-name">Akash Kumar</p>
        </div>
            </div>
            <button className="view-all-button">View All →</button>
        </div>


        <div className="who-we-are-section">
         <h2 className="who-we-are-title">Who We Are</h2>
        <p className="who-we-are-description">
        Freelancer Models is India’s largest online marketplace of freelance fashion models. Models can list their profiles and get modelling assignments from hundreds of casting recruiters. Freelancer Models provides a best platform to 5,000+ freelance models and 150+ casting recruiters to connect with each other to hire the best talents for various modeling assignments.
        </p>
        <p className="who-we-are-description">
        Established in 2016 and immediately made a name for itself; Freelancer Models’ aim is to bring modeling & acting talent onboard and connect them with casting and recruiting directors to grow the entertainment industry.
        </p>
        <button className="view-all-button">View All →</button>
        </div>

        <footer className="footer">
    <p>© 2025 NeedModelsIndia.in. All rights reserved.</p>
</footer>
        </>
    );
};

export default Header;
