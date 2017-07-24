'use strict';

import * as actions from '../../actions/school';

//对页面prop 数据进行管理
const initialState = {
  list: [],
  listLoading: false,
  counter: 0
};
export default function index(state = initialState, action = {}) {

    switch (action.type) {
    case actions.GET_SCHOOLLIST_REQUEST:

        return Object.assign({}, state, {
            listLoading: true,
            counter: action.data
        });

    case actions.GET_SCHOOLLIST_SUCCESS:

        return Object.assign({}, state, {
            listLoading: false,
            list: action.data
        });
    case actions.GET_SCHOOLLIST_FAILED:

        return Object.assign({}, state, {
            listLoading: false
        });
    default:
        return state;
    }
}
