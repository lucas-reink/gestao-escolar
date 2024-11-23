import React from 'react';
import './style.css';

const TeacherProfile = ({ teacher }) => {
    if (!teacher) return <div>No teacher data</div>;

    return (
        <div className="teacher-profile">
            <h3>{teacher.name}</h3>
            <p><strong>Subjects:</strong> {teacher.subjects.join(', ')}</p>
            <p><strong>Classes:</strong> {teacher.classes.join(', ')}</p>
            <h4>Work Schedule</h4>
            <ul>
                {teacher.schedule.map((entry, index) => (
                    <li key={index}>{entry.day}: {entry.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherProfile;
