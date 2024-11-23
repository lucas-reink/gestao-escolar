import React from 'react';
import './style.css';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
