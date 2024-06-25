import React from 'react'
import './Item.css'

const ItemData = (props) => {
  return (
    <div className='i-card'>
        <div className='i-image'>
            <img alt='image' src={props.image} />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default ItemData;
