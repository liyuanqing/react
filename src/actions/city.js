'use strict';

// constants 与 actions 在一起
import {Ajax, NameSpace} from '../util/index';

let ns = NameSpace('City');
export const GET_DATA = ns('GET_DATA');
export const UPDATE_DATA = ns('UPDATE_INFO');

export const GET_CITYLIST_REQUEST = ns('GET_CITYLIST_REQUEST');
export const GET_CITYLIST_SUCCESS = ns('GET_CITYLIST_SUCCESS');
export const GET_CITYLIST_FAILED = ns('GET_CITYLIST_FAILED');

export function getCityList(){

	return (dispatch) => {

        dispatch({
            type : GET_CITYLIST_REQUEST,
            data : ""
        });

        Ajax({
            api: 'pageCityList',
						method: 'get',
            data: {}
        },json => {

            dispatch({
                type : GET_CITYLIST_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_CITYLIST_FAILED,
                data : json
            });

        });

	}
}
