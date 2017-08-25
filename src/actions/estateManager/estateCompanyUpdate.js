'use strict';
import {
    Ajax,
    NameSpace,
    isToken,
} from '../../util/';
import {
    message
} from 'antd';
let ns = NameSpace('estateCompanyUpdate');
export const COMPANYSHOW_REQUEST = ns('COMPANYSHOW_REQUEST');
export const COMPANYSHOW_SUCCESS = ns('COMPANYSHOW_SUCCESS');
export const COMPANYSHOW_FAILED = ns('COMPANYSHOW_FAILED');

export const COMPANYPARENT_REQUEST = ns('COMPANYPARENT_REQUEST');
export const COMPANYPARENT_SUCCESS = ns('COMPANYPARENT_SUCCESS');
export const COMPANYPARENT_FAILED = ns('COMPANYPARENT_FAILED');

export const COMPANYUPDATE_REQUEST = ns('COMPANYUPDATE_REQUEST');
export const COMPANYUPDATE_SUCCESS = ns('COMPANYUPDATE_SUCCESS');
export const COMPANYUPDATE_FAILED = ns('COMPANYUPDATE_FAILED');
//获取公司经营类目
export const MCCODELIST_REQUEST = ns('MCCODELIST_REQUEST');
export const MCCODELIST_SUCCESS = ns('MCCODELIST_SUCCESS');
export const MCCODELIST_FAILED = ns('MCCODELIST_FAILED');
//获取图片上传token
export const GETUPLOADTOKEN_REQUEST = ns('GETUPLOADTOKEN_REQUEST');
export const GETUPLOADTOKEN_SUCCESS = ns('GETUPLOADTOKEN_SUCCESS');
export const GETUPLOADTOKEN_FAILED = ns('GETUPLOADTOKEN_FAILED');
export function companyInfo(params) {

    var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
    return (dispatch) => {
        dispatch({
            type: COMPANYSHOW_REQUEST,
            data: ''
        })
        Ajax({
            api: 'companyShow',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: COMPANYSHOW_SUCCESS,
                    data: json
                })
            }else if(isToken(code)){
                message.info('当前账号信息已失效,请重新登录！');
                setTimeout(() => {
                    location.href = "/";
                }, 3000)
            }else{
               message.error(json.error.errorMsg);
            }
        }, json => {
            dispatch({
                type: COMPANYSHOW_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}

export function companyParent(params) {
    var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);

    return (dispatch) => {
        dispatch({
            type: COMPANYPARENT_REQUEST,
            data: params
        })
        Ajax({
            api: 'companyParent',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: COMPANYPARENT_SUCCESS,
                    data: json
                })
            }else if(isToken(code)){
                message.info('当前账号信息已失效,请重新登录！');
                setTimeout(() => {
                    location.href = "/";
                }, 3000)
            }else{
               message.error(json.error.errorMsg);
            }
        }, json => {
            dispatch({
                type: COMPANYPARENT_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}

export function companyUpdate(params,callback) {
    var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);

    return (dispatch) => {
        dispatch({
            type: COMPANYUPDATE_REQUEST,
            data: params
        })
        Ajax({
            api: 'companyUpdate',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: COMPANYUPDATE_SUCCESS,
                    data: json
                })
                callback && callback()
            }else if(isToken(code)){
                message.info('当前账号信息已失效,请重新登录！');
                setTimeout(() => {
                    location.href = "/";
                }, 3000)
            }else{
               message.error(json.error.errorMsg);
            }
        }, json => {
            dispatch({
                type: COMPANYUPDATE_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//获取图片上传token
export function getUploadToken(username, password) {
    return (dispatch) => {
        dispatch({
            type: GETUPLOADTOKEN_REQUEST,
            data: ''
        })
        Ajax({
            url: 'http://101.37.135.54:8555/apiserver/api/qiNiuUpToken',
            data: {
                'username': username,
                'password': password,
            }
        }, json => {
            var code = json.code;
            if (json.errorcode == 0) {
                dispatch({
                    type: GETUPLOADTOKEN_SUCCESS,
                    data: json
                })
            } else if (isToken(code)) {
                message.info('当前账号信息已失效,请重新登录！');
                setTimeout(() => {
                    location.href = "/";
                }, 3000)
            } else {
                message.error(json.message);
            }
        }, json => {
            dispatch({
                type: GETUPLOADTOKEN_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//获取公司经营类目
export function mccodeList(params) {
    var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);

    return (dispatch) => {
        dispatch({
            type: MCCODELIST_REQUEST,
            data: params
        })
        Ajax({
            api: 'mccodeList',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: MCCODELIST_SUCCESS,
                    data: json
                })
            }else if(isToken(code)){
                message.info('当前账号信息已失效,请重新登录！');
                setTimeout(() => {
                    location.href = "/";
                }, 3000)
            }else{
               message.error(json.error.errorMsg);
            }
        }, json => {
            dispatch({
                type: MCCODELIST_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
