// Polyfill IE
import 'es5-shim';
import 'es5-shim/es5-sham';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Main Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import {Provider} from 'react-redux';
import store from './store';
// App
import App from './container/app';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);
