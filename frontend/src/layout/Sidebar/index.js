import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="heading">Menu</h3>
            <ul className="list">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student-management" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Alunos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teacher-management" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Professores
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/class-management" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Turmas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/calendar" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Calendário
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Configurações
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Notificações
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activity-log" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Registro de Atividades
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
