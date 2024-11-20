// routes/classRoutes.js
const express = require('express');
const { createClass, getClasses } = require('../controllers/classController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Definindo rotas para turmas
router.post('/', authMiddleware, createClass); // Criar turma
router.get('/', authMiddleware, getClasses); // Obter todas as turmas

module.exports = router;
