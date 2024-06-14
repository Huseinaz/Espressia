import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }

    const handleSetClicked = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo" onClick={handleLogoClick}>Espressia</h1>

            <div className="menu-icons" onClick={handleSetClicked}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon} /> {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
