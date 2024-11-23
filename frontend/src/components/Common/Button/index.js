import React from 'react';
import './style.css';

const Button = ({ text, onClick, type = 'primary', size = 'medium' }) => {
    return (
        <button className={`btn ${type} ${size}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
