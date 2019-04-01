const express = require('express');

const server = express();

const registerRouter = require('./data/routers/register-router');
const loginRouter = require('./data/routers/login-router');
const usersRouter = require('./data/routers/users-router');

server.use(express.json());

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
