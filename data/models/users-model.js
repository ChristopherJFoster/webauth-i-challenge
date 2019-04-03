const db = require('../dbConfig');

const checkUsername = async username => {
  // Checks to see if username is taken. Since I don't understand security, I thought it make be good to return 'taken' or 'available' rather than risk returning the hashed password.
  if (
    await db('users')
      .where({ username: username.toLowerCase() })
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
