import React from 'react'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/hero.jpeg';

const Home = () => {
    return (
        <div>
            <Hero
                cName='hero'
                heroImage={heroImage}
                title='Welcome to our site'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                url='/'
                btnClass='show'
                buttonText='Learn More'
            />
        </div>
    )
}

export default Home;
