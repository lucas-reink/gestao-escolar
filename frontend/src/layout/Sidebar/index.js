import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="heading">Menu</h3>
            <ul className="list">
                <li>
                    <NavLink to="/" className="link" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student-management" className="link" activeClassName="active">
                        Alunos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teacher-management" className="link" activeClassName="active">
                        Professores
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/class-management" className="link" activeClassName="active">
                        Turmas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/calendar" className="link" activeClassName="active">
                        Calendário
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className="link" activeClassName="active">
                        Configurações
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" className="link" activeClassName="active">
                        Notificações
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activity-log" className="link" activeClassName="active">
                        Registro de Atividades
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
