import React, { Component } from 'react';
import './Discover.css';

import Coffee1 from '../../assets/coffee1.jpg';
import Coffee2 from '../../assets/coffee2.jpg';

class DiscoverData extends Component {
    render() {
        return (
            <div className='first-dis'>
                <div className='dis-text'>
                    <h2>{this.props.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: this.props.text }}></p>
                </div>
                <div className='image'>
                    <img src={Coffee1} alt='Coffee 1' />
                    <img src={Coffee2} alt='Coffee 2' />
                </div>
            </div>
        );
    }
}

export default DiscoverData;
