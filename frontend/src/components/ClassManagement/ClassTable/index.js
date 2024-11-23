import React from 'react';
import './style.css';

const ClassTable = ({ classes }) => {
    // Verifica se 'classes' é um array
    if (!Array.isArray(classes)) {
        return <p>No classes available</p>;
    }

    return (
        <div className="class-table">
            <h3>Class List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Year</th>
                        <th>Students</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classItem, index) => (
                        <tr key={index}>
                            <td>{classItem.name || 'No name available'}</td>
                            <td>{classItem.year || 'No year specified'}</td>
                            <td>{classItem.students ? classItem.students.join(', ') : 'No students'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassTable;
