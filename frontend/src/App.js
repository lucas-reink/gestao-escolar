import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import StudentManagement from './components/StudentManagement';
import TeacherManagement from './components/TeacherManagement';
import ClassManagement from './components/ClassManagement';
import Calendar from './components/Calendar/Calendar';
import Settings from './components/Settings/SettingsForm';
import NotificationPanel from './components/Dashboard/NotificationPanel';
import ActivityLog from './components/Dashboard/ActivityLog';
import StudentProfile from './components/StudentManagement/StudentProfile'

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              {/* Página Inicial */}
              <Route path="/" element={<Home />} />

              {/* Gestão de Alunos */}
              <Route path="/student-management" element={<StudentManagement />} />

              {/* Gestão de Professores */}
              <Route path="/teacher-management" element={<TeacherManagement />} />

              {/* Gestão de Turmas */}
              <Route path="/class-management" element={<ClassManagement />} />
             
              {/* Gestão de Calendário */}
              <Route path="/calendar" element={<Calendar />} />              

              {/* Configurações */}
              <Route path="/settings" element={<Settings />} />

              {/* Painel de Notificações */}
              <Route path="/notifications" element={<NotificationPanel />} />

              {/* Registro de Atividades */}
              <Route path="/activity-log" element={<ActivityLog />} />

              {/* Student Profile */}
              <Route path="/student-profile/:studentId" element={<StudentProfile />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
