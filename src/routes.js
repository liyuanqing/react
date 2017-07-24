'use strict';
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import City from './containers/city/index';
import School from './containers/school/index';
import Community from './containers/community/index';
import Online from './containers/online/index';
import Offline from './containers/offline/index';
import Audit from './containers/audit/index';
import Audited from './containers/audited/index';
import User from './containers/user/index';
import Agent from './containers/agent/index';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './layout/';
import Home from './containers/city/index'

export default (store) => {

    //创建一个与store事件同步的history对象
    const history = syncHistoryWithStore(hashHistory, store);

    return <Router history={history}>
        <Route path="/" component={Layout}>
            <Route path="index" component={Home}/>
            <Route path='city' component={City}/>
            <Route path='school' component={School}/>
            <Route path='community' component={Community}/>
            <Route path='online' component={Online}/>
            <Route path='offline' component={Offline}/>
            <Route path='audit' component={Audit}/>
            <Route path='audited' component={Audited}/>
            <Route path='user' component={User}/>
            <Route path='agent' component={Agent}/>
            <IndexRoute component={Home}/>
            <Route path="*" component={Home}/>
        </Route>
    </Router>;
};
