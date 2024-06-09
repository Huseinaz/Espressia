import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import React, { useState } from 'react';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleSetClicked = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">HAZ</h1>

            <div className="menu-icons" onClick={handleSetClicked}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href="/">
                                <i className={item.icon} /> {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
