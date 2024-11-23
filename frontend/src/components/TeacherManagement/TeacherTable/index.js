import React from 'react';
import './style.css';

const TeacherTable = ({ teachers }) => {
    // Verifica se 'teachers' é um array
    if (!Array.isArray(teachers)) {
        return <p>No teachers available</p>;
    }

    return (
        <div className="teacher-table">
            <h3>Teacher List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subjects</th>
                        <th>Classes</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, index) => (
                        <tr key={index}>
                            <td>{teacher.name}</td>
                            <td>{teacher.subjects && teacher.subjects.length > 0 ? teacher.subjects.join(', ') : 'No subjects'}</td>
                            <td>{teacher.classes && teacher.classes.length > 0 ? teacher.classes.join(', ') : 'No classes'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherTable;
