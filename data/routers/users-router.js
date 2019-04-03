const router = require('express').Router();

const Users = require('../models/users-model');

router.get('/', cookieCheck, async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: `There was an error while retrieving the users data. ${err}`
    });
  }
});

module.exports = router;

function cookieCheck(req, res, next) {
  if (req.headers.cookie === 'pecan sandie') {
    next();
  } else {
    res.status(403).json({
      error: 'You shall not pass (because you must be logged in to do that)!'
    });
  }
}
