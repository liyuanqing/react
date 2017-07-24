'use strict';

import { combineReducers } from 'redux';
//import layout from './layout/';
import city from './city/';
import school from './school/';
import community from './community/';
import online from './online/';
import offline from './offline/';
import audit from './audit/';
import audited from './audited/';
import user from './user/';
import agent from './agent/';
//import contacts from './contacts/';
import { routerReducer } from 'react-router-redux';


//将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
    city,
    school,
    community,
    online,
    offline,
    audit,
    audited,
    user,
    agent,
    routing: routerReducer
});

export default rootReducer;
