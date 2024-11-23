import React, { useState } from 'react';
import './style.css';

const SettingsForm = () => {
    const [settings, setSettings] = useState({
        schoolName: '',
        timezone: 'GMT',
        currency: 'BRL',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings({
            ...settings,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Settings Updated:', settings);
    };

    return (
        <div className="settings-form">
            <h3>System Settings</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="schoolName">School Name</label>
                    <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        value={settings.schoolName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timezone">Timezone</label>
                    <select
                        id="timezone"
                        name="timezone"
                        value={settings.timezone}
                        onChange={handleChange}
                    >
                        <option value="GMT">GMT</option>
                        <option value="GMT+1">GMT+1</option>
                        <option value="GMT-3">GMT-3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="currency">Currency</label>
                    <select
                        id="currency"
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                    >
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <button type="submit" className="btn-save">
                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default SettingsForm;
