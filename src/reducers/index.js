'use strict';

import {
  combineReducers
} from 'redux';
import serveManager from './estateManager/serveManager';
import serveManagerAdd from './estateManager/serveManagerAdd';
import serveManagerUpdate from './estateManager/serveManagerUpdate';
import serveManagerSub from './estateManager/serveManagerSub';

import estateCompanyManager from './estateManager/estateCompanyManager';
import estateCompanyUpdate from './estateManager/estateCompanyUpdate';
import estateCompanyAdd from './estateManager/estateCompanyAdd';

import {
  routerReducer
} from 'react-router-redux';

//将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
  serveManager,
  serveManagerAdd,
  serveManagerUpdate,
  serveManagerSub,
  estateCompanyManager,
  estateCompanyUpdate,
  estateCompanyAdd,
  routing: routerReducer
});

export default rootReducer;
