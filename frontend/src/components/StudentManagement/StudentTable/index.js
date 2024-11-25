import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent } from '../../../config/api'; // Funções da API
import io from 'socket.io-client';
import Dropdown from '../../Common/Dropdown';
import { useNavigate } from 'react-router-dom';
import './style.css';

// Configuração do WebSocket
const socket = io('http://localhost:8080');

// Função para escutar atualizações em tempo real
const handleStudentUpdates = (setStudents) => {
  socket.on('students-updated', (data) => {
    console.log('Atualização recebida via WebSocket:', data);

    setStudents((prevStudents) => {
      if (data.deleted) {
        console.log('Aluno excluído:', data);
        return prevStudents.filter((student) => student._id !== data._id);
      }

      const existingStudentIndex = prevStudents.findIndex(
        (student) => student._id === data._id
      );

      if (existingStudentIndex > -1) {
        const updatedStudents = [...prevStudents];
        updatedStudents[existingStudentIndex] = data;
        return updatedStudents;
      }

      return [...prevStudents, data];
    });
  });
};

const StudentTable = ({ searchTerm }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleDropdownSelect = async (option, studentId) => {
    console.log(`Ação selecionada: ${option}, ID do aluno: ${studentId}`);

    if (option === 'Ver Perfil') {
      navigate(`/student-profile/${studentId}`);
    } else if (option === 'Excluir') {
      try {
        const response = await deleteStudent(studentId);
        if (response?.message === 'Student deleted successfully') {
          setStudents((prevStudents) =>
            prevStudents.filter((student) => student._id !== studentId)
          );
          alert('Aluno excluído com sucesso!');
        } else {
          console.error('Erro ao excluir aluno:', response);
          alert('Erro ao excluir aluno. Tente novamente.');
        }        
      } catch (error) {
        console.error('Erro ao excluir aluno:', error.message);
        alert('Erro ao excluir aluno. Tente novamente.');
      }
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudents();
        setStudents(data);
      } catch (error) {
        console.error('Erro ao carregar estudantes:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
    handleStudentUpdates(setStudents);

    return () => socket.off('students-updated');
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Carregando alunos...</p>;
  if (!filteredStudents.length) return <p>Nenhum aluno encontrado</p>;

  return (
    <div className="student-table">
      <h3>Lista de Estudantes</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Classe</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.enrollment}</td>
              <td>{student.class}</td>
              <td>{student.status}</td>
              <td>
                <Dropdown
                  options={[
                    { label: 'Ver Perfil' },
                    { label: 'Excluir' },
                  ]}
                  onSelect={(option) =>
                    handleDropdownSelect(option.label, student._id)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
