import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/contact-hero.jpg';
import Footer from '../../Footer/Footer.jsx';

const Contact = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='Contact'
                btnClass='hide'
            />

            <Footer />
        </div>
    )
}

export default Contact;
