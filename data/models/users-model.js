const db = require('../../configs/dbConfig');

const getUsers = () => {
  return db('users');
};

module.exports = {
  getUsers
};
