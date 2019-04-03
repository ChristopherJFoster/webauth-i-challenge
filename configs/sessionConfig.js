const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const configuredKnex = require('./dbConfig');

module.exports = {
  name: 'Nietzsche',
  secret: 'Human, All Too Human',
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: configuredKnex,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createTable: true,
    clearTable: 1000 * 60 * 30
  })
};
