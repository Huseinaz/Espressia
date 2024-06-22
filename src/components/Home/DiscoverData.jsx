import React from 'react'
import './Discover.css'

import Coffee1 from '../../assets/coffee1.jpg'
import Coffee2 from '../../assets/coffee2.jpg'

const DiscoverData = () => {
    return (
        <div className='first-dis'>
            <div className='dis-text'>
                <h2>Featured Coffees</h2>
                <p>
                    <span>Single-Origin Delight:</span> Savor the unique flavors from coffee-growing regions around the world.<br />
                    <span>Signature Blends:</span> Our expert roasters create perfect blends for a balanced and complex taste.<br />
                    <span>Seasonal Specials:</span> Enjoy limited-time offerings crafted to capture the essence of each season.<br />
                </p>
            </div>
            <div className='image'>
                <img src={Coffee1} alt='img' />
                <img src={Coffee2} alt='img' />
            </div>
        </div>
    )
}

export default DiscoverData