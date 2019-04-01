const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'chris', password: bcrypt.hashSync('123', 8) }, // 1
    { username: 'andy', password: bcrypt.hashSync('456', 8) }, // 2
    { username: 'blackcat', password: bcrypt.hashSync('789', 8) } // 3
  ]);
};
