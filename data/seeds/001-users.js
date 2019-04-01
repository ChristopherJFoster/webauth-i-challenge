exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'chris', password: '123' }, // 1
    { username: 'andy', password: '456' }, // 2
    { username: 'blackcat', password: '789' } // 3
  ]);
};
