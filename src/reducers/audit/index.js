import * as actions from '../../actions/audit';
//对页面prop 数据进行管理
const initialState = {
  list: [343,342,23425234,435235]
};
export default function index(state = initialState, action = {}) {

    switch (action.type) {


    case actions.TEST:

        return Object.assign({}, state, {
            list: action.data
        });

    default:
        return state;
    }
}
