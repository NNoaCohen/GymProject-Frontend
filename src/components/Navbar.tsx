import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schedules">Schedules</Link></li>
                    <li><a href="#studio-classes">Studio Classes</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#aboutUs">About Us</a></li>
                    <li><Link to="/blog">Sports Blog</Link></li>
                    <li><Link to="/clubs">Clubs</Link></li>
                </ul>
                <button className="navbar__login">
                    <Link to="/account" className="navbar__login-link">
                        My Account
                    </Link>
                </button>

            </nav>
        </header>
    );
};

export default Navbar;
