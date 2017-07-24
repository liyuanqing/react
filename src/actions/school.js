'use strict';

import {Ajax, NameSpace} from '../util/index';

let ns = NameSpace('School');
export const GET_SCHOOLLIST_REQUEST = ns('GET_SCHOOLLIST_REQUEST');
export const GET_SCHOOLLIST_SUCCESS = ns('GET_SCHOOLLIST_SUCCESS');
export const GET_SCHOOLLIST_FAILED = ns('GET_SCHOOLLIST_FAILED');

export function getSchoolList(){

	return (dispatch) => {

        dispatch({
            type : GET_SCHOOLLIST_REQUEST,
            data : ""
        });

        Ajax({
            api: 'pageSchoolList',
						method: 'get',
            data: {}
        },json => {
            dispatch({
                type : GET_SCHOOLLIST_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_SCHOOLLIST_FAILED,
                data : json
            });

        });

	}
}
