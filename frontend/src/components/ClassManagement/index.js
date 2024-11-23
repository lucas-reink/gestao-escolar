import React, { useState } from 'react';
import ClassTable from './ClassTable';
import ClassForm from './ClassForm';
import ClassOverview from './ClassOverview';
import SubjectSelector from './SubjectSelector';
import './style.css';

const ClassManagement = () => {
    const [selectedClass, setSelectedClass] = useState(null);

    const handleClassSelect = (classData) => {
        setSelectedClass(classData);
    };

    return (
        <div className="class-management">
            <h2>Class Management</h2>
            <ClassForm />
            <ClassTable onSelectClass={handleClassSelect} />
            {selectedClass && <ClassOverview classData={selectedClass} />}
            <SubjectSelector />
        </div>
    );
};

export default ClassManagement;
