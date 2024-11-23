import React, { useState } from 'react';
import './style.css';

const AttendanceTracker = ({ students }) => {
    const [attendance, setAttendance] = useState({});

    // Função para lidar com mudanças no status de presença
    const handleAttendanceChange = (studentId, status) => {
        setAttendance({ ...attendance, [studentId]: status });
    };

    // Verifica se students é um array e mapeia para renderizar a tabela
    if (!Array.isArray(students)) {
        return <p>No students available</p>;
    }

    return (
        <div className="attendance-tracker">
            <h3>Attendance Tracker</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.enrollment}>
                            <td>{student.name}</td>
                            <td>
                                <select
                                    value={attendance[student.enrollment] || 'present'} // Valor inicial do seletor
                                    onChange={(e) => handleAttendanceChange(student.enrollment, e.target.value)}
                                >
                                    <option value="present">Present</option>
                                    <option value="absent">Absent</option>
                                    <option value="late">Late</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTracker;
