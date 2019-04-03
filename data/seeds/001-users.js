const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'chris'.toLowerCase(), password: bcrypt.hashSync('123', 8) }, // 1
    { username: 'andy'.toLowerCase(), password: bcrypt.hashSync('456', 8) }, // 2
    { username: 'blackcat'.toLowerCase(), password: bcrypt.hashSync('789', 8) } // 3
  ]);
};
