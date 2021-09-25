import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>TheMeal</h2>
            <nav>
                <a href="/featured">Featured</a>
                <a href="/favorite">Favorite</a>
                <a href="/famous">Famous</a>
            </nav>
        </div>
    );
};

export default Header;