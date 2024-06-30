import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/service-hero.jpg';
import Footer from '../../Footer/Footer.jsx';
import ServiceData from './ServiceData.jsx';

import Service1 from '../../assets/Latte.jpg';
import Service2 from '../../assets/Latte.jpg';

const Service = () => {
    return (
        <div>
            <Hero
                cName='hero-mid'
                heroImage={heroImage}
                title='Services'
                btnClass='hide'
            />

            <div className='service'>

                <h1>Our Services</h1>
                <p>At Espressia, we offer a range of services to cater to all coffee lovers</p>

                <ServiceData
                    className='first-service'
                    heading='Featured Coffees'
                    text='<span>Single-Origin Delight:</span> Savor the unique flavors from coffee-growing regions around the world.<br />
                    <span>Signature Blends:</span> Our expert roasters create perfect blends for a balanced and complex taste.<br />
                    <span>Seasonal Specials:</span> Enjoy limited-time offerings crafted to capture the essence of each season.<br />'
                    img={Service1}
                />

                <ServiceData
                    className='first-service-reverse'
                    heading='Why Choose Espressia?'
                    text='<span>Ethically Sourced:</span> We partner with sustainable farms that prioritize fair labor practices and environmental stewardship.<br />
                    <span>Expertly Roasted:</span> Each batch is roasted to perfection, highlighting the distinctive characteristics of every bean.<br />
                    <span>Freshness Guaranteed:</span> Our coffee is roasted and shipped quickly to ensure maximum freshness in every cup.<br />'
                    img={Service2}
                />

                <ServiceData
                    className='first-service'
                    heading='Featured Coffees'
                    text='<span>Single-Origin Delight:</span> Savor the unique flavors from coffee-growing regions around the world.<br />
                    <span>Signature Blends:</span> Our expert roasters create perfect blends for a balanced and complex taste.<br />
                    <span>Seasonal Specials:</span> Enjoy limited-time offerings crafted to capture the essence of each season.<br />'
                    img={Service1}
                />

                <ServiceData
                    className='first-service-reverse'
                    heading='Why Choose Espressia?'
                    text='<span>Ethically Sourced:</span> We partner with sustainable farms that prioritize fair labor practices and environmental stewardship.<br />
                    <span>Expertly Roasted:</span> Each batch is roasted to perfection, highlighting the distinctive characteristics of every bean.<br />
                    <span>Freshness Guaranteed:</span> Our coffee is roasted and shipped quickly to ensure maximum freshness in every cup.<br />'
                    img={Service2}
                />
            </div>

            <Footer />
        </div>
    )
}

export default Service;
