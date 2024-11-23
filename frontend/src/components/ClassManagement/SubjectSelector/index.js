import React, { useState } from 'react';
import './style.css';

const SubjectSelector = ({ subjects = [], onSelect }) => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    // Manipula as alterações nas seleções de disciplinas
    const handleSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedSubjects(value);  // Atualiza o estado local
        onSelect(value);  // Passa os valores selecionados para o componente pai
    };

    // Verifica se subjects está definido e tem itens, antes de renderizar
    if (!subjects.length) {
        return <p>No subjects available.</p>;  // Exibe uma mensagem se não houver disciplinas
    }

    return (
        <div className="subject-selector">
            <label>Select Subjects:</label>
            <select multiple value={selectedSubjects} onChange={handleSelect}>
                {/* Itera sobre as disciplinas e cria uma opção para cada uma */}
                {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SubjectSelector;
