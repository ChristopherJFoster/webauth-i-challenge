const router = require('express').Router();

const Actions = require('../models/actions-model');

router.post('/', async (req, res) => {
  const { project_id, actDesc } = req.body;
  if (!project_id || !actDesc) {
    res.status(400).json({
      error: 'Please provide a project ID and an action description.'
    });
  } else if (actDesc.length > 128) {
    res.status(400).json({
      error: 'The action description may not exceed 128 characters.'
    });
  } else {
    try {
      const addedAction = await Actions.addAction(req.body);
      res.status(201).json(addedAction);
    } catch (err) {
      // See notes below regarding errno 19...
      if (err.errno === 19) {
        res.status(400).json({
          error: `Please supply a valid project ID.`
        });
      } else {
        res.status(500).json({
          error: `There was an error while adding the action data. ${err}`
        });
      }
    }
  }
});

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.getActions();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
      error: `There was an error while retrieving the actions data. ${err}`
    });
  }
});

module.exports = router;

// ...I want to send a specific message about supplying a valid project ID (without making an additional initial server call just to check if the project_id is valid). However, I think errno 19 is a SQLite contraint error, and could mean other things than a foreign key violation. I would like to know how to parse the SQLite error, which looks like this:
// { [Error: SQLITE_CONSTRAINT: FOREIGN KEY constraint failed] errno: 19, code: 'SQLITE_CONSTRAINT' }
// I used errno 19 in this case just to show what I was up to.
