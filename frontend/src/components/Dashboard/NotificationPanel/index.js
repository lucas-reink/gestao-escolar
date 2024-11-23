import React from 'react';
import './style.css';

const NotificationPanel = ({ notifications = [] }) => {
    return (
        <div className="notification-panel">
            <h3>Notifications</h3>
            {notifications.length === 0 ? (
                <p>No notifications available</p>
            ) : (
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index} className="notification-item">
                            <span>{notification}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationPanel;
