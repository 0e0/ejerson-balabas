import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app.js';
require('./public/styles/index.less');


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>), document.querySelector('.container'));
