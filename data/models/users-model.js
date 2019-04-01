const db = require('../dbConfig');

const checkUsername = async username => {
  if (
    await db('users')
      .where({ username })
      .first()
  ) {
    return 'taken';
  } else {
    return 'available';
  }
};

const getUsers = () => {
  return db('users');
};

module.exports = {
  checkUsername,
  getUsers
};
