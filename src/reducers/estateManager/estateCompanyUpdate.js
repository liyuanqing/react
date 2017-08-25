import * as actions from '../../actions/estateManager/estateCompanyUpdate';
const initialState = {
	loading: false,
	info: '',
  parentList: [],
	uploadToken: '',
	category:[],
};
export default function index(state = initialState, action = {}) {
	switch (action.type) {
		case actions.COMPANYSHOW_REQUEST:
			return Object.assign({}, state, {
				loading: true
			});
		case actions.COMPANYSHOW_SUCCESS:
		action.data.data.business_img=[{
			uid: -1,
			name: 'logo.png',
			status: 'done',
			url:action.data.data.business_img,
		}]
			return Object.assign({}, state, {
				loading: false,
				info: action.data.data
			});
		case actions.COMPANYSHOW_FAILED:
			return Object.assign({}, state, {
				loading: false,
			});
    case actions.COMPANYPARENT_REQUEST:
        return Object.assign({}, state, {
            loading: true
        });
    case actions.COMPANYPARENT_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            parentList : action.data.data
        });
    case actions.COMPANYPARENT_FAILED:
        return Object.assign({}, state, {
            loading: false,
        });
    case actions.COMPANYUPDATE_REQUEST:
        return Object.assign({}, state, {
            loading: true
        });
    case actions.COMPANYUPDATE_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
        });
    case actions.COMPANYUPDATE_FAILED:
        return Object.assign({}, state, {
            loading: false,
        });
				case actions.GETUPLOADTOKEN_REQUEST:
					return Object.assign({}, state, {
						loading: true
					});
				case actions.GETUPLOADTOKEN_SUCCESS:
					return Object.assign({}, state, {
						loading: false,
						uploadToken: action.data.data
					});
				case actions.GETUPLOADTOKEN_FAILED:
					return Object.assign({}, state, {
						loading: false,
					});
					case actions.MCCODELIST_REQUEST:
							return Object.assign({}, state, {
									loading: true
							});
					case actions.MCCODELIST_SUCCESS:
							return Object.assign({}, state, {
									loading: false,
									category:action.data.data
							});
					case actions.MCCODELIST_FAILED:
							return Object.assign({}, state, {
									loading: false,
							});

		default:
			return state;
	}
}
