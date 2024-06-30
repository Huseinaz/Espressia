import React, { Component } from 'react';
import './Service.css';

class ServiceData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='service-text'>
                    <h2>{this.props.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: this.props.text }}></p>
                </div>
                <div className='service-image'>
                    <img src={this.props.img} alt='Service' />
                </div>
            </div>
        );
    }
}

export default ServiceData;
