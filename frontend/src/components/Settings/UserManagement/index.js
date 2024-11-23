import React, { useState } from 'react';
import './style.css';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Admin' },
        { id: 2, name: 'Jane Smith', role: 'Teacher' },
        { id: 3, name: 'Alice Johnson', role: 'Student' },
    ]);

    const handleRoleChange = (id, newRole) => {
        setUsers(users.map(user => (user.id === id ? { ...user, role: newRole } : user)));
    };

    return (
        <div className="user-management">
            <h3>User Management</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Student">Student</option>
                                </select>
                            </td>
                            <td>
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
