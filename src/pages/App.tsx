import React from 'react';

import { HashRouter as Router, Switch } from 'react-router-dom';

import Route from 'components/Route';

import Landingpage from './Landingpage';
import Account from './Account';
import Chats from './Chats';
import FAQ from './FAQ';
import Faces from './Faces';
import Guild from './Guild';
import LiveStream from './Livestream';
import Login from './Login';
import Pentagon from './Pentagon';
import Program from './Program';
import Register from './Register';

const App = () => (
  <Router>
    <Switch>
      <Route isPublic exact path="/" component={Landingpage} />
      <Route isPublic path="/login" component={Login} />
      <Route isPublic path="/register" component={Register} />
      <Route isProtected exact path="/" component={LiveStream} />
      <Route isProtected path="/account" component={Account} />
      <Route isProtected path="/chats" component={Chats} />
      <Route isProtected path="/faq" component={FAQ} />
      <Route isProtected path="/pentagon" component={Pentagon} />
      <Route isProtected path="/programma" component={Program} />
      <Route isProtected path="/smoelen-boek" component={Faces} />
      <Route isProtected path="/vereniging" component={Guild} />
    </Switch>
  </Router>
);

export default App;
