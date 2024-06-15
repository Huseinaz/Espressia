import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/home-hero.jpeg';

const Home = () => {
    return (
        <div>
            <Hero
                cName='hero'
                heroImage={heroImage}
                title='Welcome to Espressia'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                url='/'
                btnClass='show'
                buttonText='Learn More'
            />
        </div>
    )
}

export default Home;
