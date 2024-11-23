import React from 'react';
import './style.css';

const Calendar = ({ events = [] }) => {
    return (
        <div className="calendar">
            <h3>School Calendar</h3>
            <div className="calendar-grid">
                {events.length === 0 ? (
                    <p>No events scheduled</p>
                ) : (
                    events.map((event, index) => (
                        <div className="calendar-item" key={index}>
                            <span className="event-date">{event.date}</span>
                            <span className="event-title">{event.title}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Calendar;
