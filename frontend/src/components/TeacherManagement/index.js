import React, { useState } from 'react';
import TeacherTable from './TeacherTable';
import TeacherForm from './TeacherForm';
import TeacherProfile from './TeacherProfile';
import './style.css';

const TeacherManagement = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const handleTeacherSelect = (teacher) => {
        setSelectedTeacher(teacher);
    };

    return (
        <div className="teacher-management">
            <h2>Teacher Management</h2>
            <TeacherForm />
            <TeacherTable onSelectTeacher={handleTeacherSelect} />
            {selectedTeacher && <TeacherProfile teacher={selectedTeacher} />}
        </div>
    );
};

export default TeacherManagement;
