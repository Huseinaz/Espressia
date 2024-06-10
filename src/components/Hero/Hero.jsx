import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.jpeg';

const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <img alt='Hero' src={heroImage} />
            </div>
            <div className='hero-text'>
                <h1 className='hero-heading'>
                    Welcome to our website
                </h1>
                <p className='hero-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, quaerat.
                </p>
                <a href='/' className='hero-button'>
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default Hero;
