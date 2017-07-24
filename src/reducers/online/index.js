'use strict';

import * as actions from '../../actions/online';

//对页面prop 数据进行管理
const initialState = {
    list: [],
    listLoading: false,
    counter: 0
};

export default function index(state = initialState, action = {}) {
    switch (action.type) {

        case actions.GET_LIST_REQUEST:

            return Object.assign({}, state, {
                listLoading: true,
                counter: action.data
            });

        case actions.GET_LIST_SUCCESS:

            return Object.assign({}, state, {
                listLoading: false,
                list: action.data.map( item => {
                    return `第${state.counter}次加载：${item}`;
                })
            });

        case actions.GET_LIST_FAILED:

            return Object.assign({}, state, {
                listLoading: false
            });

        default:
            return state;
    }
}
