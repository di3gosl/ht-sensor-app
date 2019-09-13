import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import Data from './components/Data';
import { Provider } from 'react-redux';
import store from './store';
import ReactNotification from 'react-notifications-component';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'react-notifications-component/dist/theme.css';
import './index.scss';

require('dotenv').config();

ReactDOM.render(
    <Provider store={store}>
        <ReactNotification />
        <Router>
            <Route path="/" exact component={Dashboard} />
            <Route path="/data/:code" component={Data} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
