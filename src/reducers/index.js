'use strict';

import {
  combineReducers
} from 'redux';
import demo from './demo/demo';

import {
  routerReducer
} from 'react-router-redux';

//将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
  demo,
  routing: routerReducer
});

export default rootReducer;
