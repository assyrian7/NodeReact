import React from 'react';
import { Router, Route } from 'react-router';
//import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
//import {store} from './store'

const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={About} />
		<Route exact path='/login' component={Login} />
		<Route path='/dashboard' component={Dashboard} />
		<Route path="*" component={NotFound} />
	</Router>
);

export default Routes;