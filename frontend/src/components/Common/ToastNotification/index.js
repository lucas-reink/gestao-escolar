import React, { useState, useEffect } from 'react';
import './style.css';

const ToastNotification = ({ message, type = 'success', duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div className={`toast ${type}`}>
            <span>{message}</span>
        </div>
    );
};

export default ToastNotification;
