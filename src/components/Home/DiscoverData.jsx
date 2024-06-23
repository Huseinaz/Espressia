import React, { Component } from 'react';
import './Discover.css';

class DiscoverData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='dis-text'>
                    <h2>{this.props.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: this.props.text }}></p>
                </div>
                <div className='image'>
                    <img src={this.props.img1} alt='Coffee 1' />
                    <img src={this.props.img2} alt='Coffee 2' />
                </div>
            </div>
        );
    }
}

export default DiscoverData;
