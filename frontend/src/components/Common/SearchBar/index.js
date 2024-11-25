import React from 'react';
import './style.css';

const SearchBar = ({ onSearch, placeholder }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
