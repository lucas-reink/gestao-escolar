const Student = require('../models/Student');

// Obter todos os estudantes
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: `Failed to fetch students: ${error.message}` });
  }
};

// Criar um novo estudante
exports.createStudent = async (req, res) => {
  try {
    const { name, enrollment, class: className, status } = req.body;

    if (!name || !enrollment || !className || !status) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingStudent = await Student.findOne({ enrollment });
    if (existingStudent) {
      return res.status(400).json({ error: 'Enrollment already exists' });
    }

    const newStudent = new Student({ name, enrollment, class: className, status });
    const savedStudent = await newStudent.save();

    // Emitir evento via WebSocket
    req.io.emit('students-updated', savedStudent); // Emite a atualização para todos os clientes conectados
    
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: `Failed to create student: ${error.message}` });
  }
};

// Atualizar um estudante por ID
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Emitir evento via WebSocket
    req.io.emit('students-updated', updatedStudent); // Emite a atualização para todos os clientes conectados
    
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: `Failed to update student: ${error.message}` });
  }
};

// Deletar um estudante por ID
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Emitir evento via WebSocket
    req.io.emit('students-updated', { id: deletedStudent._id, deleted: true }); // Emite o evento de deletação
    
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: `Failed to delete student: ${error.message}` });
  }
};
