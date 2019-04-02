const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Auth = require('../models/auth-model');
const Users = require('../models/users-model');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: 'You must provide a username and password to register.'
    });
  } else if (username.length > 64 || password.length > 128) {
    res.status(400).json({
      error:
        'Your username may not exceed 64 characters. Your password may not exceed 128 characters.'
    });
  } else {
    try {
      const checkUsername = await Users.checkUsername(username);
      if (checkUsername === 'taken') {
        res.status(400).json({
          error: 'That username is already taken. Please try another.'
        });
      } else {
        try {
          const newUser = await Auth.registerUser(req.body);
          res.status(201).json({ message: `The user has been registered.` });
        } catch (err) {
          res.status(500).json({
            error: `There was an error while registering the user. ${err}`
          });
        }
      }
    } catch (err) {
      res.status(500).json({
        error: `There was an error while checking the username. ${err}`
      });
    }
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: 'You must provide a username and password to login.'
    });
  } else {
    try {
      const user = await Auth.getUser(username.toLowerCase());
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
