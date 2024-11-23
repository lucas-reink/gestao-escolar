const API_BASE_URL = 'http://localhost:8080'; // URL do backend

// Função para buscar todos os estudantes
export const getAllStudents = async () => {
    const response = await fetch(`${API_BASE_URL}/api/students`);
    if (!response.ok) throw new Error('Erro ao buscar estudantes');
    return await response.json(); // Retorna os dados como JSON
};

// Função para criar um estudante
export const createStudent = async (studentData) => {
    const response = await fetch(`${API_BASE_URL}/api/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData), // Envia os dados no corpo da requisição
    });
    if (!response.ok) throw new Error('Erro ao criar estudante');
    return await response.json();
};

// Função para deletar um estudante
export const deleteStudent = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/students/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Erro ao deletar estudante: ${errorDetails}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para atualizar os dados do estudante
export const updateStudent = async (student) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/students/${student._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Erro ao atualizar estudante: ${errorDetails}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};
