import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

require('dotenv').config();

ReactDOM.render(
    <Provider store={store}>
        <ReactNotification />
        <Dashboard />
    </Provider>,
    document.getElementById('root')
);
