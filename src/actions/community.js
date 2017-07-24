'use strict';

import {Ajax, NameSpace} from '../util/index';

let ns = NameSpace('Community');
export const GET_COMMUNITYLIST_REQUEST = ns('GET_COMMUNITYLIST_REQUEST');
export const GET_COMMUNITYLIST_SUCCESS = ns('GET_COMMUNITYLIST_SUCCESS');
export const GET_COMMUNITYLIST_FAILED = ns('GET_COMMUNITYLIST_FAILED');

export function getCommunityList(){

	return (dispatch) => {

        dispatch({
            type : GET_COMMUNITYLIST_REQUEST,
            data : ""
        });

        Ajax({
            api: 'pageCommunityList',
						method: 'get',
            data: {}
        },json => {

            dispatch({
                type : GET_COMMUNITYLIST_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_COMMUNITYLIST_FAILED,
                data : json
            });

        });

	}
}
