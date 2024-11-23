import React from 'react';
import './style.css';

const DashboardOverview = ({ totalStudents, totalTeachers, totalEvents, totalRevenue }) => {
    return (
        <div className="dashboard-overview">
            <div className="overview-card">
                <h3>Total Students</h3>
                <p>{totalStudents}</p>
            </div>
            <div className="overview-card">
                <h3>Total Teachers</h3>
                <p>{totalTeachers}</p>
            </div>
            <div className="overview-card">
                <h3>Total Events</h3>
                <p>{totalEvents}</p>
            </div>
            <div className="overview-card">
                <h3>Total Revenue</h3>
                <p>R$ {totalRevenue}</p>
            </div>
        </div>
    );
};

export default DashboardOverview;
