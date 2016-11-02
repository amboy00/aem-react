import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import About from './About';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" getComponent={(nextState, cb) => { cb(null, About); }} />
  </Route>
);
