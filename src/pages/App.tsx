import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

import LiveStream from './Livestream';
import Account from './Account';
import Chats from './Chats';
import Faces from './Faces';
import FAQ from './FAQ';
import Guild from './Guild';
import Pentagon from './Pentagon';
import Program from './Program';
import Login from './Login';
import Register from './Register';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/" component={LiveStream} />
      <PrivateRoute path="/account" component={Account} />
      <PrivateRoute path="/chats" component={Chats} />
      <PrivateRoute path="/smoelen-boek" component={Faces} />
      <PrivateRoute path="/faq" component={FAQ} />
      <PrivateRoute path="/vereniging" component={Guild} />
      <PrivateRoute path="/pentagon" component={Pentagon} />
      <PrivateRoute path="/programma" component={Program} />
    </Switch>
  </Router>
);

export default App;
