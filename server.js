const express = require('express');

const server = express();

const authRouter = require('./data/routers/auth-router');
const usersRouter = require('./data/routers/users-router');

server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
