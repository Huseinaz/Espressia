import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/service-hero.jpg';
import Footer from '../../Footer/Footer.jsx';

const Service = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='Services'
                btnClass='hide'
            />

            <Footer />
        </div>
    )
}

export default Service;
