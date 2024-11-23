import React from 'react';
import './style.css';

const ClassOverview = ({ classData }) => {
    if (!classData) return <div>No class data available</div>;

    return (
        <div className="class-overview">
            <h3>{classData.name} - {classData.year}</h3>
            <p><strong>Students:</strong> {classData.students.length}</p>
            <h4>Assigned Subjects</h4>
            <ul>
                {classData.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClassOverview;
