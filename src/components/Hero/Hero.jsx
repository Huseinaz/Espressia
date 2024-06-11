import React from 'react';
import './Hero.css';

const Hero = (props) => {
    return (
        <div>
            <div className={props.cName}>
                <img alt='Hero' src={props.heroImage} />
            </div>
            <div className='hero-text'>
                <h1 className='hero-heading'>
                    {props.title}
                </h1>
                <p className='hero-paragraph'>
                    {props.paragraph}
                </p>
                <a href='/' className='hero-button'>
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default Hero;
