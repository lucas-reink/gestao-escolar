// controllers/classController.js
const Class = require('../models/Class');

// Função para criar turma
const createClass = async (req, res) => {
    try {
        const { name, teacher, students } = req.body;
        const newClass = await Class.create({ name, teacher, students });
        res.status(201).json(newClass);
    } catch (err) {
        res.status(500).json({ message: 'Error creating class', error: err.message });
    }
};

// Função para obter todas as turmas
const getClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('teacher').populate('students');
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving classes', error: err.message });
    }
};

module.exports = { createClass, getClasses };
