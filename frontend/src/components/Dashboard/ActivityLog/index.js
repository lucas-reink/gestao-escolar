import React from 'react';
import './style.css';

const ActivityLog = ({ activities = [] }) => {
    return (
        <div className="activity-log">
            <h3>Activity Log</h3>
            {activities.length === 0 ? (
                <p>No activities to display</p>
            ) : (
                <ul>
                    {activities.map((activity, index) => (
                        <li key={index} className="activity-item">
                            <span>{activity}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ActivityLog;
