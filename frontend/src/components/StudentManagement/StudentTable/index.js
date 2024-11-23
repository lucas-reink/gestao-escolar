import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent, updateStudent } from '../../../config/api'; // Funções da API
import io from 'socket.io-client'; // Importando o socket.io-client
import './style.css';

const socket = io('http://localhost:8080'); // URL do servidor WebSocket
socket.on('connect', () => {
    console.log('WebSocket connected');
});

const StudentTable = () => {
    const [students, setStudents] = useState([]); // Lista de estudantes
    const [loading, setLoading] = useState(true); // Status de carregamento
    const [editingStudent, setEditingStudent] = useState(null); // Estudante sendo editado

    useEffect(() => {
        // Função para buscar os estudantes ao carregar o componente
        const fetchStudents = async () => {
            try {
                const data = await getAllStudents(); // Chama o backend
                setStudents(data); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error('Erro ao carregar estudantes:', error.message);
            } finally {
                setLoading(false); // Remove o estado de carregamento
            }
        };

        fetchStudents(); // Carrega os dados ao montar o componente

        // Escuta as atualizações em tempo real enviadas pelo servidor
        socket.on('students-updated', (data) => {
            if (data.deleted) {
                // Se um estudante foi deletado, removemos da lista
                setStudents((prevStudents) =>
                    prevStudents.filter((student) => student._id !== data.id)
                );
            } else {
                // Se um novo estudante foi adicionado ou atualizado, adicionamos ou atualizamos na lista
                setStudents((prevStudents) => {
                    const existingStudentIndex = prevStudents.findIndex(
                        (student) => student._id === data._id
                    );
                    if (existingStudentIndex > -1) {
                        // Se o estudante já existe, atualizamos ele
                        const updatedStudents = [...prevStudents];
                        updatedStudents[existingStudentIndex] = data;
                        return updatedStudents;
                    }
                    // Caso contrário, adicionamos o novo estudante
                    return [...prevStudents, data];
                });
            }
        });

        // Limpeza da escuta quando o componente for desmontado
        return () => socket.off('students-updated');
    }, []);

    // Função para excluir o estudante
    const handleDelete = async (id) => {
        try {
            await deleteStudent(id); // Chama a função da API para deletar o estudante
            setStudents((prevStudents) =>
                prevStudents.filter((student) => student._id !== id) // Atualiza a lista após excluir
            );
        } catch (error) {
            console.error('Erro ao deletar estudante:', error.message);
        }
    };

    // Função para editar o estudante
    const handleEdit = (student) => {
        setEditingStudent(student); // Seta o estudante que será editado
        // Aqui você pode abrir um modal ou outro componente para edição
    };

    // Função para salvar as alterações do estudante
    const handleSaveEdit = async (student) => {
        try {
            const updatedStudent = await updateStudent(student); // Chama a função de API para atualizar o estudante
            setStudents((prevStudents) =>
                prevStudents.map((s) =>
                    s._id === updatedStudent._id ? updatedStudent : s
                ) // Atualiza a lista com os dados alterados
            );
            setEditingStudent(null); // Fecha o formulário de edição
        } catch (error) {
            console.error('Erro ao editar estudante:', error.message);
        }
    };

    if (loading) return <p>Loading students...</p>;

    if (!students.length) return <p>No students available</p>;

    return (
        <div className="student-table">
            <h3>Student List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Enrollment</th>
                        <th>Class</th>
                        <th>Status</th>
                        <th>Actions</th> {/* Coluna para ações */}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.enrollment}>
                            <td>{student.name}</td>
                            <td>{student.enrollment}</td>
                            <td>{student.class}</td>
                            <td>{student.status}</td>
                            <td>
                                {/* Botões de Editar e Deletar */}
                                <button className="edit-button" onClick={() => handleEdit(student)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Aqui você pode renderizar um formulário ou modal para editar */}
            {editingStudent && (
                <div className="edit-form">
                    <h4>Edit Student</h4>
                    {/* Exemplo de formulário de edição */}
                    <input
                        type="text"
                        value={editingStudent.name}
                        onChange={(e) =>
                            setEditingStudent((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                    />
                    <button onClick={() => handleSaveEdit(editingStudent)}>Save</button>
                    <button onClick={() => setEditingStudent(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default StudentTable;
