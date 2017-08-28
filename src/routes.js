'use strict';
import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';
// ==== 主路由加载 ====
import demo from './containers/demo/demo';


// ==== 懒加载路由 ====

// const estateCompanyManager = () => LazilyLoadComponent(require.ensure([], require => require('./containers/estateManager/estateCompanyManager').default, 'route-estateCompanyManager'))
// const estateCompanyUpdate = () => LazilyLoadComponent(require.ensure([], require => require('./containers/estateManager/estateCompanyUpdate').default, 'route-estateCompanyUpdate'))
// const estateCompanyAdd = () => LazilyLoadComponent(require.ensure([], require => require('./containers/estateManager/estateCompanyAdd').default, 'route-estateCompanyAdd'))
import {
  syncHistoryWithStore
} from 'react-router-redux';

import Layout from './layout/';
import Home from './containers/demo/demo'
export default (store) => {
  //创建一个与store事件同步的history对象
  const history = syncHistoryWithStore(hashHistory, store)
  return <Router history={history}>
    <Route path="/" component={Layout}>
      <Route path="Home" component={Home} />
      <Route path="demo" component={demo} />

      <Route path="*" component={demo} />
      <IndexRoute component={Home} />
    </Route>
  </Router>;
};
