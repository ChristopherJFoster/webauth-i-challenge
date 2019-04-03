import React from 'react';
import { Route } from 'react-router-dom';

import LoginRegister from './LoginRegister';
import Users from './Users';

const App = () => {
  return (
    <div className='container'>
      <Route path='/login' component={LoginRegister} />
      <Route exact path='/' component={Users} />
    </div>
  );
};

export default App;
