import React, { useState } from 'react';
import './style.css';

const ClassForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const classData = { name, year, students };
        onSubmit(classData);
    };

    return (
        <div className="class-form">
            <h3>{name ? 'Edit Class' : 'Add Class'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Class Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Year:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Students:</label>
                    <input
                        type="text"
                        value={students.join(', ')}
                        onChange={(e) => setStudents(e.target.value.split(',').map(item => item.trim()))}
                        placeholder="Enter student names separated by commas"
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ClassForm;
