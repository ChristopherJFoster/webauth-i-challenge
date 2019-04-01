const router = require('express').Router();

const Register = require('../models/register-model');
const Users = require('../models/users-model');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      error: 'Please provide a username and password to register.'
    });
  } else if (username.length > 64 || password.length > 128) {
    res.status(400).json({
      error:
        'Your username may not exceed 64 characters. Your password may not exceed 128 characters.'
    });
  } else {
    try {
      const checkUsername = await Users.checkUsername(username);
      console.log(checkUsername);
      if (checkUsername === 'taken') {
        res.status(400).json({
          error: 'That username is already taken. Please try another.'
        });
      } else {
        try {
          const newUser = await Register.registerUser(req.body);
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

module.exports = router;
