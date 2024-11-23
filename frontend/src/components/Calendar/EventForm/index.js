import React, { useState } from 'react';
import './style.css';

const EventForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = { title, date, description };
        onSubmit(eventData);
    };

    return (
        <div className="event-form">
            <h3>{title ? 'Edit Event' : 'Add Event'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Event Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EventForm;
