import React from 'react'
import './Discover.css'
import DiscoverData from './DiscoverData'

const Discover = () => {
    return (
        <div className='discover'>
            <h1>Discover our premium coffee beans.</h1>
            <p>At Espressia, we are passionate about providing you with the finest coffee experience.</p>

            <DiscoverData 
                heading = 'Featured Coffees'
                text ='<span>Single-Origin Delight:</span> Savor the unique flavors from coffee-growing regions around the world.<br />
                    <span>Signature Blends:</span> Our expert roasters create perfect blends for a balanced and complex taste.<br />
                    <span>Seasonal Specials:</span> Enjoy limited-time offerings crafted to capture the essence of each season.<br />'
            />
        </div>
    )
}

export default Discover