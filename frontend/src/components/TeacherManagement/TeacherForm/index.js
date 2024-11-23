import React, { useState } from 'react';
import './style.css';

const TeacherForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [classes, setClasses] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teacher = { name, subjects, classes };
        onSubmit(teacher);
    };

    return (
        <div className="teacher-form">
            <h3>{name ? 'Edit Teacher' : 'Add Teacher'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Subjects:</label>
                    <input
                        type="text"
                        value={subjects.join(', ')}
                        onChange={(e) => setSubjects(e.target.value.split(',').map(item => item.trim()))}
                        placeholder="Enter subjects separated by commas"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Classes:</label>
                    <input
                        type="text"
                        value={classes.join(', ')}
                        onChange={(e) => setClasses(e.target.value.split(',').map(item => item.trim()))}
                        placeholder="Enter classes separated by commas"
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default TeacherForm;
