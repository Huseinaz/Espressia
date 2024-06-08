import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import React from 'react';

const Navbar = () => {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Logo</h1>

            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href="/">
                                <i class={item.icon} /> {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
