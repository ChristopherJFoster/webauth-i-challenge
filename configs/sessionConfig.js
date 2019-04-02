const KnexSessionStore = require('knex-session-knex')(session);
const configuredKnex = require('./configs/dbConfig');

module.exports = {
  name: 'Nietzsche',
  secret: 'Human, All Too Human',
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUnitialized: false,
  store: new KnexSessionStore({
    knex: configuredKnex,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createTable: true,
    clearTable: 1000 * 60 * 30
  })
};
