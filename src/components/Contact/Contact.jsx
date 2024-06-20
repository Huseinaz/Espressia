import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/contact-hero.jpg';

const Contact = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='Contact'
                btnClass='hide'
            />
        </div>
    )
}

export default Contact;
