import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import ReactGA from 'react-ga';
import useScroll from 'react-router-scroll';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Home from './containers/Home';

import './index.scss';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export const store = createStoreWithMiddleware(reducers);

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    require('./routes/About'),
  ],
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={rootRoute}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
);
