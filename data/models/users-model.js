const db = require('../dbConfig');

const addProject = async project => {
  const newProject = await db('projects').insert(project);
  return db('projects').where({ id: newProject[0] });
};

const getProjects = () => {
  return db('projects');
};

const getProject = id => {
  return db('projects')
    .leftJoin('actions', 'projects.id', 'actions.project_id')
    .select(
      'projects.id',
      'projName as name',
      'projDesc as description',
      'projComp as completed',
      'actions.id as actionId',
      'actDesc',
      'actNotes',
      'actComp'
    )
    .where({ 'projects.id': id });
};

module.exports = {
  addProject,
  getProjects,
  getProject
};
