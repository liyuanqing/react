import * as actions from '../../actions/estateManager/communityManager';
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
        case actions.STATUSCHANGE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.STATUSCHANGE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data.data.list
            });
        case actions.STATUSCHANGE_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.GETAREA_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETAREA_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                options: action.data.data
            });
        case actions.GETAREA_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.GETSERVERLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETSERVERLIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                treeData: action.data.data
            });
        case actions.GETSERVERLIST_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.GETCOMPANYLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETCOMPANYLIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                parentList: action.data.data
            });
        case actions.GETCOMPANYLIST_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });

        case actions.PARKINGCODE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.PARKINGCODE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.PARKINGCODE_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
            //小区二维码
        case actions.SITECODE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.SITECODE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.SITECODE_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
      //初始化设置
      case actions.INIT_REQUEST:
        return Object.assign({}, state, {
          loading: true
        });
      case actions.INIT_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
        });
      case actions.INIT_FAILED:
        return Object.assign({}, state, {
          loading: false,
        });
      //插入测试数据
      case actions.TEXTINSERT_REQUEST:
        return Object.assign({}, state, {
          loading: true
        });
      case actions.TEXTINSERT_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
        });
      case actions.TEXTINSERT_FAILED:
        return Object.assign({}, state, {
          loading: false,
        });
      //上线下线
      case actions.ONLINE_REQUEST:
        return Object.assign({}, state, {
          loading: true
        });
      case actions.ONLINE_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
        });
      case actions.ONLINE_FAILED:
        return Object.assign({}, state, {
          loading: false,
        });
      //下载测试支付二维码
      case actions.TEXTPAY_REQUEST:
        return Object.assign({}, state, {
          loading: true
        });
      case actions.TEXTPAY_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
        });
      case actions.TEXTPAY_FAILED:
        return Object.assign({}, state, {
          loading: false,
        });
        //生活缴费二维码
    case actions.SITELIFE_REQUEST:
        return Object.assign({}, state, {
            loading: true
        });
    case actions.SITELIFE_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
        });
    case actions.SITELIFE_FAILED:
        return Object.assign({}, state, {
            loading: false,
        });
        default:
            return state;
    }
}
