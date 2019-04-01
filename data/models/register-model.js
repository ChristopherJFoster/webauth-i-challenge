const db = require('../dbConfig');
const bcrypt = require('bcryptjs');

const registerUser = async user => {
  const password = bcrypt.hashSync(user.password, 8);
  return db('users').insert({ username: user.username, password });
};

module.exports = {
  registerUser
};
