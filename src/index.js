import React from 'react'; //eslint-disable-line
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App';
import About from './modules/about';
import Reports from './modules/reports';
import Home from './modules/home';
import Form from './modules/form';
import TestForm from './modules/testForm';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      {/* add the routes here */}
      <Route path="/reports" component={Reports}/>
      <Route path="/about" component={About}/>
      <Route path="/form" component={Form}/>
      <Route path="/testForm" component={TestForm}/>
    </Route>
  </Router>
), document.getElementById('app'));
