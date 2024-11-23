import React, { useState } from 'react';
import { createStudent } from '../../../config/api'; // Função da API para criar estudante
import './style.css';

const StudentForm = ({ onStudentAdded }) => {
    const [name, setName] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [className, setClassName] = useState('');
    const [status, setStatus] = useState('active');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o reload da página
        const student = { name, enrollment, class: className, status };

        try {
            const newStudent = await createStudent(student); // Chama o backend
            onStudentAdded(newStudent); // Atualiza a lista de estudantes no frontend
        } catch (error) {
            console.error('Erro ao criar estudante:', error.message);
        }
    };

    return (
        <div className="student-form">
            <h3>Adicionar Aluno</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Matrícula:</label>
                    <input
                        type="text"
                        value={enrollment}
                        onChange={(e) => setEnrollment(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Turma:</label>
                    <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="active">Ativo</option>
                        <option value="inactive">Inativo</option>
                    </select>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default StudentForm;
