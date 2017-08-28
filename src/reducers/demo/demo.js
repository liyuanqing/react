import * as actions from '../../actions/demo/demo';
const initialState = {
    loading: false,
    data: [],
    parentList:[],
    treeData:[],
    options:[],
    paginationTotal: 0
};
export default function index(state = initialState, action = {}) {
    switch (action.type) {
        case actions.GETLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETLIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data.data.list,
                paginationTotal: action.data.data.totals
            });
        case actions.GETLIST_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        default:
            return state;
    }
}
