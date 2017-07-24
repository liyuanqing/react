//import {GET_DATA, UPDATE_DATA} from '../../actions/home';
import * as actions from '../../actions/city';
//对页面prop 数据进行管理
const initialState = {
  list: [],
  listLoading: false,
  counter: 0
};
export default function index(state = initialState, action = {}) {

    switch (action.type) {
    case actions.GET_CITYLIST_REQUEST:

        return Object.assign({}, state, {
            listLoading: true,
            counter: action.data
        });

    case actions.GET_CITYLIST_SUCCESS:

        return Object.assign({}, state, {
            listLoading: false,
            list: action.data
        });

    case actions.GET_CITYLIST_FAILED:

        return Object.assign({}, state, {
            listLoading: false
        });
    default:
        return state;
    }
}
