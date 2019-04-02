const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Login = require('../models/login-model');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: 'You must provide a username and password to login.'
    });
  } else {
    try {
      const user = await Login.getUser(username.toLowerCase());
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          cookie: 'pecan sandie',
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({
          error:
            'You shall not pass (because you provided invalid credentials)!'
        });
      }
    } catch (err) {
      res.status(500).json({
        error: `There was an error while logging in the user. ${err}`
      });
    }
  }
});

module.exports = router;
