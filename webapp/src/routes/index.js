import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../Screen/Login';
import Main from '../Screen/Main';
import FirstSemesterRegister from '../Screen/FirstSemesterRegister';
import RegisterClass from '../Screen/RegisterClass';
import SearchClass from '../Screen/SearchClass';
import FormMain from '../Screen/FormMain';
import TesteScreen from '../Screen/TesteScreen';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/Main' component={Main} />
        <Route
          path='/FirstSemesterRegister'
          component={FirstSemesterRegister}
        />
        <Route path='/RegisterClass' component={RegisterClass} />
        <Route path='/SearchClass' component={SearchClass} />
        <Route path='/FormMain' component={FormMain} />
        <Route path='/TesteScreen' component={TesteScreen} />
      </Switch>
    </Router>
  );
}
