import React, { useState } from 'react';
import Modal from 'react-modal'; // Importando o Modal
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import SearchBar from '../Common/SearchBar';
import './style.css';

// Definir o elemento da aplicação para acessibilidade do Modal
Modal.setAppElement('#root');

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Termo de busca
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlar a visibilidade do Modal

  // Função para lidar com o aluno adicionado
  const handleStudentAdded = (newStudent) => {
    setIsModalOpen(false); // Fechar o modal após adicionar aluno
  };

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        className="modal" // Pode estilizar com CSS
      >
        <h3>Adicionar Aluno</h3>
        <StudentForm onStudentAdded={handleStudentAdded} />
      </Modal>

      {/* Barra de busca */}
      <SearchBar 
        onSearch={(term) => setSearchTerm(term)} 
        placeholder="Buscar aluno" 
      />

      {/* Tabela de alunos */}
      <StudentTable searchTerm={searchTerm} />
    </div>
  );
};

export default StudentManagement;
