// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <h1 className="logo">ConnecTour</h1>
        <nav>
            <button className="btn">Sign in</button>
            <button className="btn primary">Sign up</button>
        </nav>
    </header>
);

export default Header;
