import React, { useState } from 'react';
import Modal from 'react-modal';  // Importando o Modal
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import './style.css';

// Definir o elemento da aplicação para acessibilidade do Modal
Modal.setAppElement('#root');

const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);  // Controlar a visibilidade do Modal

    const handleStudentAdded = (newStudent) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
        setIsModalOpen(false);  // Fechar o modal após adicionar aluno
    };

    const openModal = () => {
        setIsModalOpen(true);  // Abrir o Modal
    };

    const closeModal = () => {
        setIsModalOpen(false);  // Fechar o Modal
    };

    return (
        <div className="student-management">
            <h2>Gestão de Alunos</h2>
            {/* Botão para abrir o Modal */}
            <button onClick={openModal}>Adicionar Aluno</button>

            {/* Modal para o Formulário de Adicionar Aluno */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Adicionar Aluno"
                className="modal"  // Pode estilizar com CSS
            >
                <h3>Adicionar Aluno</h3>
                <StudentForm onStudentAdded={handleStudentAdded} />
            </Modal>

            <StudentTable students={students} />
        </div>
    );
};

export default StudentManagement;
