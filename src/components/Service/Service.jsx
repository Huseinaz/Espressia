import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/service-hero.jpg';
import Footer from '../../Footer/Footer.jsx';
import ServiceData from './ServiceData.jsx';

import Service1 from '../../assets/service1.jpg';
import Service2 from '../../assets/service2.jpg';
import Service3 from '../../assets/service3.jpg';
import Service4 from '../../assets/service4.jpg';

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
                    heading='Coffee Subscription'
                    text='Enjoy freshly roasted coffee delivered to your doorstep every month. Customize your subscription to receive your favorite blends and discover new flavors. Our subscription service is flexible, allowing you to choose your delivery frequency and coffee preferences.'
                    img={Service1}
                />

                <ServiceData
                    className='first-service-reverse'
                    heading='Wholesale Supply'
                    text='We provide high-quality coffee beans to cafes, restaurants, and businesses. Partner with us to serve exceptional coffee to your customers. Our wholesale program includes tailored roasting profiles, dedicated support, and competitive pricing to meet your business needs.'
                    img={Service2}
                />

                <ServiceData
                    className='first-service'
                    heading='Custom Blends'
                    text='Create your own unique coffee blend with our custom blending service. Perfect for special occasions, gifts, or personal enjoyment. Work with our master roasters to develop a blend that matches your taste preferences and brewing style.'
                    img={Service3}
                />

                <ServiceData
                    className='first-service-reverse'
                    heading='Coffee Workshops'
                    text='Learn the art of coffee making from our expert baristas. Join our workshops to master brewing techniques, understand coffee origins, and perfect your latte art skills. Our workshops are designed for all skill levels, from beginners to seasoned baristas.'
                    img={Service4}
                />
            </div>

            <Footer />
        </div>
    )
}

export default Service;
