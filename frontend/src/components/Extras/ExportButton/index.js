import React from 'react';
import './style.css';

const ExportButton = () => {
    const handleExport = () => {
        alert('Data exported successfully.');
        // Add logic to export data, e.g., to Excel or PDF
    };

    return (
        <div className="export-button">
            <button className="btn-export" onClick={handleExport}>
                Export Data
            </button>
        </div>
    );
};

export default ExportButton;
