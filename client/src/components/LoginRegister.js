import React from 'react';
import axios from 'axios';

import { useInput } from '../utilities/useInput';

const LoginRegister = ({ history }) => {
  const usernameLogin = useInput();
  const passwordLogin = useInput();
  const usernameRegister = useInput();
  const passwordRegister = useInput();

  const login = async e => {
    e.preventDefault();
    try {
      const loggedIn = await axios.post('localhost:5000/api/auth/login', {
        username: usernameLogin,
        password: passwordLogin
      });
      console.log(loggedIn);
    } catch (err) {
      console.log(err);
    }
  };

  const register = async e => {
    e.preventDefault();
    try {
      const registered = await axios.post('localhost:5000/api/auth/register', {
        username: usernameRegister,
        password: passwordRegister
      });
      console.log(registered);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login-register'>
      <h1 className='title'>Authentication</h1>
      <form onSubmit={login}>
        <input
          required
          type='text'
          value={usernameLogin.value}
          name='usernameLogIn'
          onChange={usernameLogin.updateValue}
          placeholder='username'
        />
        <input
          required
          type='password'
          value={passwordLogin.value}
          name='passwordLogIn'
          onChange={passwordLogin.updateValue}
          placeholder='password'
        />
        <button type='submit' className='login'>
          Log In
        </button>
      </form>
      <h2>Not yet a user? Register now (it's free):</h2>
      <form onSubmit={register}>
        <input
          required
          autoComplete='off'
          type='text'
          value={usernameRegister.value}
          name='usernameRegister'
          onChange={usernameRegister.updateValue}
          placeholder='username'
        />
        <input
          required
          autoComplete='off'
          type='password'
          value={passwordRegister.value}
          name='passwordRegister'
          onChange={passwordRegister.updateValue}
          placeholder='password'
        />
        <button type='submit' className='register'>
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;
