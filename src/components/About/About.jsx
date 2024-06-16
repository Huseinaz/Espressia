import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/about-hero.jpg';

const About = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='About'
                btnClass='hide'
            />
        </div>
    )
}

export default About;
