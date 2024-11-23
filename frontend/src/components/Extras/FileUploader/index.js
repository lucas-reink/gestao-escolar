import React, { useState } from 'react';
import './style.css';

const FileUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleUpload = () => {
        if (file) {
            alert(`File ${file.name} uploaded successfully.`);
            // Process the file upload logic here
        } else {
            alert('Please select a file first.');
        }
    };

    return (
        <div className="file-uploader">
            <h3>File Uploader</h3>
            <input type="file" onChange={handleFileChange} />
            <button className="btn-upload" onClick={handleUpload}>Upload File</button>
            {file && <p>Selected File: {file.name}</p>}
        </div>
    );
};

export default FileUploader;
