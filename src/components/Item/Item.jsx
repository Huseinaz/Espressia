import React from 'react'
import './Item.css'
import ItemData from './ItemData';

import Item1 from '../../assets/CaramelMacchiato.jpg'
import Item2 from '../../assets/Latte.jpg'
import Item3 from '../../assets/Mocha.png'

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
            <ItemData
                image={Item2}
                heading='Vanilla Hazelnut Latte'
                text='Savor the warm and nutty flavors of our Vanilla Hazelnut Latte. Made with our smooth espresso, steamed milk, and a blend of vanilla and hazelnut syrups, this drink is perfect for those who love a creamy and aromatic coffee experience.'
            />
            <ItemData
                image={Item3}
                heading='Mocha Delight'
                text="Indulge in the chocolatey goodness of our Mocha Delight. This decadent drink features our bold espresso, steamed milk, and rich chocolate syrup, topped with a generous layer of whipped cream. It's a treat for any chocolate and coffee lover."
            />
        </div>
    </div>
  )
}

export default Item;
