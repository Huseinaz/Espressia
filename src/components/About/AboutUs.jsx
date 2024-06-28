import React from 'react'
import './About.css'

const AboutUs = () => {
    return (
        <div className='about-container'>
            <h1>About Espressia</h1>
            <p>At Espressia, we believe that every cup of coffee tells a story. Our journey began with a simple love for coffee and a mission to bring the best beans from around the world to your cup.</p>

            <h1>Our Mission</h1>
            <p>Our mission is to elevate your coffee experience by providing high-quality, ethically sourced coffee. We are committed to sustainable practices and supporting the communities where our coffee is grown.</p>

            <h1>Our Process</h1>
            <ul>
                <li><span>Sourcing:</span> We travel the globe to find the finest coffee beans, building relationships with farmers who share our commitment to quality and sustainability.</li>
                <li><span>Roasting:</span> Our expert roasters use their skills to bring out the unique flavors and aromas in each batch, ensuring a consistent and exceptional product.</li>
                <li><span>Tasting:</span> Every roast is carefully tasted to ensure it meets our high standards of excellence.</li>
            </ul>

            <h1>Our Promise</h1>
            <p>We promise to deliver coffee that is not only delicious but also responsibly sourced and roasted with care. Join us as we explore the world of coffee, one cup at a time.</p>
        </div>
    )
}

export default AboutUs;
