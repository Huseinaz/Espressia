import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/about-hero.jpg';
import Footer from '../../Footer/Footer.jsx';

const About = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='About'
                btnClass='hide'
            />

            <Footer />
        </div>
    )
}

export default About;
