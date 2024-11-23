import React from 'react';
import './style.css';

const EventList = ({ events }) => {
    return (
        <div className="event-list">
            <h3>Upcoming Events</h3>
            <div className="event-items">
                {events.length === 0 ? (
                    <p>No upcoming events</p>
                ) : (
                    events.map((event, index) => (
                        <div className="event-item" key={index}>
                            <span className="event-date">{event.date}</span>
                            <span className="event-title">{event.title}</span>
                            <p>{event.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EventList;
