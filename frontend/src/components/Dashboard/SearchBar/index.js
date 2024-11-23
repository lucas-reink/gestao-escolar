import React from 'react';
import './style.css';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
