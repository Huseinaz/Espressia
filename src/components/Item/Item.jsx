import React from 'react'
import './Item.css'
import ItemData from './ItemData';

import Item1 from '../../assets/CaramelMacchiato.jpg'

const Item = () => {
  return (
    <div className='item'>
        <h1>Our Best Sellers</h1>
        <p>Customer favorites, crafted for the perfect coffee experience.</p>

        <div className='item-card'>
            <ItemData
                image={Item1}
                heading='Caramel Macchiato'
                text='Enjoy the rich and smooth flavor of our Caramel Macchiato. This delightful drink combines our signature espresso with steamed milk and a sweet caramel drizzle, offering a perfect balance of sweetness and coffee richness.'
            />
        </div>
    </div>
  )
}

export default Item;
