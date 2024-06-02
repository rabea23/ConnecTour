// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
    <div className="search-bar">
        <input type="text" placeholder="From where?" />
        <input type="text" placeholder="Where to?" />
        <input type="text" placeholder="Depart - Return" />
        <input type="text" placeholder="1 adult" />
        <button className="btn primary">Search</button>
    </div>
);

export default SearchBar;
