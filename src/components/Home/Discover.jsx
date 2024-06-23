import React from 'react'
import './Discover.css'
import DiscoverData from './DiscoverData'

import Coffee1 from '../../assets/coffee1.jpg';
import Coffee2 from '../../assets/coffee2.jpg';
import Coffee3 from '../../assets/coffee3.jpg';
import Coffee4 from '../../assets/coffee4.jpg';

const Discover = () => {
    return (
        <div className='discover'>
            <h1>Discover our premium coffee beans.</h1>
            <p>At Espressia, we are passionate about providing you with the finest coffee experience.</p>

            <DiscoverData
                className='first-dis'
                heading='Featured Coffees'
                text='<span>Single-Origin Delight:</span> Savor the unique flavors from coffee-growing regions around the world.<br />
                    <span>Signature Blends:</span> Our expert roasters create perfect blends for a balanced and complex taste.<br />
                    <span>Seasonal Specials:</span> Enjoy limited-time offerings crafted to capture the essence of each season.<br />'
                img1={Coffee1}
                img2={Coffee2}
            />

            <DiscoverData
                className='first-dis-reverse'
                heading='Why Choose Espressia?'
                text='<span>Ethically Sourced:</span> We partner with sustainable farms that prioritize fair labor practices and environmental stewardship.<br />
                    <span>Expertly Roasted:</span> Each batch is roasted to perfection, highlighting the distinctive characteristics of every bean.<br />
                    <span>Freshness Guaranteed:</span> Our coffee is roasted and shipped quickly to ensure maximum freshness in every cup.<br />'
                img1={Coffee3}
                img2={Coffee4}
            />
        </div>
    )
}

export default Discover