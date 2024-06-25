import React from 'react'
import Discover from './Discover.jsx'
import Hero from '../Hero/Hero';
import heroImage from '../../assets/home-hero.jpeg';
import Item from '../Item/Item.jsx';

const Home = () => {
    return (
        <div>
            <Hero
                cName='hero'
                heroImage={heroImage}
                title='Welcome to Espressia'
                paragraph='Start your coffee journey with Espressia today!'
                url='/'
                btnClass='show'
                buttonText='Explore Now'
            />
            <Discover />
            <Item />
        </div>
    )
}

export default Home;
