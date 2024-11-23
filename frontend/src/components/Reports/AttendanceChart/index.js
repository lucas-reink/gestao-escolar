import React from 'react';
import { Bar } from 'react-chartjs-2';
import './style.css';

const AttendanceChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: 'Attendance',
                data: data.map(item => item.value),
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="attendance-chart">
            <h3>Attendance Chart</h3>
            <Bar data={chartData} />
        </div>
    );
};

export default AttendanceChart;
