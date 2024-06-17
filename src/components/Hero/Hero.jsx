import React from 'react';
import './Hero.css';

const Hero = (props) => {
    return (
        <div className={props.cName}>
            <img alt='Hero' src={props.heroImage} />
            <div className='hero-text'>
                <h1 className='hero-heading'>
                    {props.title}
                </h1>
                <p className='hero-paragraph'>
                    {props.paragraph}
                </p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
    )
}

export default Hero;
