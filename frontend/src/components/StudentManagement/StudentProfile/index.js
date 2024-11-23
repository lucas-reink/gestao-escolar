import React from 'react';
import './style.css';

const StudentProfile = ({ student }) => {
    if (!student) return <div>No student data</div>;

    return (
        <div className="student-profile">
            <h3>{student.name}</h3>
            <p><strong>Enrollment:</strong> {student.enrollment}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Status:</strong> {student.status}</p>
            <h4>Grades</h4>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {student.grades.map((grade, index) => (
                        <tr key={index}>
                            <td>{grade.subject}</td>
                            <td>{grade.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentProfile;
