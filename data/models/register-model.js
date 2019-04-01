const db = require('../dbConfig');

const addAction = async action => {
  const newAction = await db('actions').insert(action);
  return db('actions').where({ id: newAction[0] });
};

const getActions = () => {
  return db('actions');
};

module.exports = {
  addAction,
  getActions
};
