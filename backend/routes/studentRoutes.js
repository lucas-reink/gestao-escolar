const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Rota para obter todos os estudantes
router.get('/', studentController.getAllStudents);

// Rota para criar um novo estudante
router.post('/', studentController.createStudent);

// Rota para atualizar um estudante
router.put('/:id', studentController.updateStudent);

// Rota para deletar um estudante
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
