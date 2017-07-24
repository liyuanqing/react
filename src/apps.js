'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import createRoute from './routes';
import createStore from './store/'
import reducers from './reducers/';
//import 'index.less';
//import '../node_modules/antd/dist/antd.less';
const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        {createRoute(store)}
    </Provider>,
    document.getElementById('container')
);
