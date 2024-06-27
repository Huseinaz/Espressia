import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Espressia</h1>
                <p>The finest coffee experience awaits you</p>
            </div>
            <div>
                <a href='/'>
                    <i className="fa-brands fa-facebook-square" />
                </a>
                <a href='/'>
                    <i className="fa-brands fa-instagram-square" />
                </a>
                <a href='/'>
                    <i className="fa-brands fa-linkedin" />
                </a>
                <a href='/'>
                    <i className="fa-brands fa-whatsapp-square" />
                </a>
            </div>
        </div>

        <div className='bottom'>

        </div>
    </div>
  )
}

export default Footer;
