import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='form-container'>
            <h1>Send a message to us!</h1>
            <form>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Your Email' />
                <input type='text' placeholder='Subject' />
                <textarea placeholder='Your Message' rows="4"></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;
