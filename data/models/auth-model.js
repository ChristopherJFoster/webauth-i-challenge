const db = require('../../configs/dbConfig');
const bcrypt = require('bcryptjs');

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

const registerUser = async user => {
  const password = bcrypt.hashSync(user.password, 8);
  return db('users').insert({
    username: user.username.toLowerCase(),
    password
  });
};

const getUser = username => {
  return db('users')
    .where({ username })
    .first();
};

module.exports = {
  checkUsername,
  registerUser,
  getUser
};
