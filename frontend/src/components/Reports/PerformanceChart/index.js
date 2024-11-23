import React from 'react';
import { Line } from 'react-chartjs-2';
import './style.css';

const PerformanceChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: 'Performance',
                data: data.map(item => item.value),
                fill: false,
                borderColor: '#007bff',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="performance-chart">
            <h3>Performance Chart</h3>
            <Line data={chartData} />
        </div>
    );
};

export default PerformanceChart;
