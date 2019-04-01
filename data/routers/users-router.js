const router = require('express').Router();
const Middleware = require('../custom-middleware');

const Users = require('../models/users-model');

router.get('/', Middleware.cookieCheck, async (req, res) => {
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
