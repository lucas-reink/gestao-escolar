const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io'); // Importando o socket.io
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const server = require('http').Server(app); // Usando o servidor HTTP

// Configuração do CORS no Socket.io
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',  // Permite conexões somente do frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }
});


// Middleware
app.use(express.json());
app.use(cors());

// Passando a instância do socket para as rotas
app.use((req, res, next) => {
  req.io = io; // Passando o objeto io para os controladores
  next();
});

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Rotas de estudantes
app.use('/api/students', studentRoutes);

// Iniciar o servidor
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
