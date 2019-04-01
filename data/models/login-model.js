const db = require('../dbConfig');

const getUser = username => {
  return db('users')
    .where({ username })
    .first();
};

module.exports = {
  getUser
};
