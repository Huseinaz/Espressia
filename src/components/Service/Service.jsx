import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/service-hero.jpg';

const Service = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='Services'
                btnClass='hide'
            />
        </div>
    )
}

export default Service;
