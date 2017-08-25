'use strict';
import {
    Ajax,
    NameSpace,
    isToken,
} from '../../util/';
import {
    message
} from 'antd';
let ns = NameSpace('communityManager');
export const GETLIST_REQUEST = ns('GETLIST_REQUEST');
export const GETLIST_SUCCESS = ns('GETLIST_SUCCESS');
export const GETLIST_FAILED = ns('GETLIST_FAILED');

export const GETAREA_REQUEST = ns('GETAREA_REQUEST');
export const GETAREA_SUCCESS = ns('GETAREA_SUCCESS');
export const GETAREA_FAILED = ns('GETAREA_FAILED');


export const STATUSCHANGE_REQUEST = ns('STATUSCHANGE_REQUEST');
export const STATUSCHANGE_SUCCESS = ns('STATUSCHANGE_SUCCESS');
export const STATUSCHANGE_FAILED = ns('STATUSCHANGE_FAILED');


export const GETSERVERLIST_REQUEST = ns('GETSERVERLIST_REQUEST');
export const GETSERVERLIST_SUCCESS = ns('GETSERVERLIST_SUCCESS');
export const GETSERVERLIST_FAILED = ns('GETSERVERLIST_FAILED');


export const GETCOMPANYLIST_REQUEST = ns('GETCOMPANYLIST_REQUEST');
export const GETCOMPANYLIST_SUCCESS = ns('GETCOMPANYLIST_SUCCESS');
export const GETCOMPANYLIST_FAILED = ns('GETCOMPANYLIST_FAILED');
//临停二维码下载状态
export const PARKINGCODE_REQUEST = ns('PARKINGCODE_REQUEST');
export const PARKINGCODE_SUCCESS = ns('PARKINGCODE_SUCCESS');
export const PARKINGCODE_FAILED = ns('PARKINGCODE_FAILED');
//小区二维码下载状态
export const SITECODE_REQUEST = ns('SITECODE_REQUEST');
export const SITECODE_SUCCESS = ns('SITECODE_SUCCESS');
export const SITECODE_FAILED = ns('SITECODE_FAILED');
//生活缴费二维码下载状态
export const SITELIFE_REQUEST = ns('SITELIFE_REQUEST');
export const SITELIFE_SUCCESS = ns('SITELIFE_SUCCESS');
export const SITELIFE_FAILED = ns('SITELIFE_FAILED');
//下载测试支付二维码
export const TEXTPAY_REQUEST = ns('TEXTPAY_REQUEST');
export const TEXTPAY_SUCCESS = ns('TEXTPAY_SUCCESS');
export const TEXTPAY_FAILED = ns('TEXTPAY_FAILED');
//小区初始化服务
export const INIT_REQUEST = ns('INIT_REQUEST');
export const INIT_SUCCESS = ns('INIT_SUCCESS');
export const INIT_FAILED = ns('INIT_FAILED');
//插入测试数据
export const TEXTINSERT_REQUEST = ns('TEXTINSERT_REQUEST');
export const TEXTINSERT_SUCCESS = ns('TEXTINSERT_SUCCESS');
export const TEXTINSERT_FAILED = ns('TEXTINSERT_FAILED');
//插入测试数据
export const ONLINE_REQUEST = ns('ONLINE_REQUEST');
export const ONLINE_SUCCESS = ns('ONLINE_SUCCESS');
export const ONLINE_FAILED = ns('ONLINE_FAILED');

//获取列表
export function getList(params) {
  var defaultParam = {
    page:1,
    rows:10,
  },
  params = Object.assign({}, defaultParam, params);
  params = JSON.stringify(params);
    return (dispatch) => {
        dispatch({
            type: GETLIST_REQUEST,
            data: ''
        })
        Ajax({
            api: 'communityList',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: GETLIST_SUCCESS,
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
                type: GETLIST_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//获取省市
export function getArea(params) {
    var defaultParam = {},
        params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
    return (dispatch) => {
        dispatch({
            type: GETAREA_REQUEST,
            data: ''
        })
        Ajax({
            api: 'getArea',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: GETAREA_SUCCESS,
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
                type: GETAREA_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//初始化设置
export function initializeServe(params,callback){
  var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
  params = JSON.stringify(params);
  return (dispatch) => {
    dispatch({
      type: INIT_REQUEST,
      data: ''
    })
    Ajax({
      api: 'initService',
      data: {
        data: params
      }
    }, json => {
      var code = json.code;
      if (code == 20000) {
        dispatch({
          type: INIT_SUCCESS,
          data: json
        })
        message.success('操作成功');
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
        type: INIT_FAILED,
        data: json
      })
      message.error('服务器错误，请重试');
    })
  }
}
//插入测试数据
export function textInsert(params,callback){
  var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
  params = JSON.stringify(params);
  return (dispatch) => {
    dispatch({
      type: TEXTINSERT_REQUEST,
      data: ''
    })
    Ajax({
      api: 'textInsert',
      data: {
        data: params
      }
    }, json => {
      var code = json.code;
      if (code == 20000) {
        dispatch({
          type: TEXTINSERT_SUCCESS,
          data: json
        })
        message.success('操作成功');
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
        type: TEXTINSERT_FAILED,
        data: json
      })
      message.error('服务器错误，请重试');
    })
  }
}
//上线下线
export function onlineApply(params,callback){
  var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
  params = JSON.stringify(params);
  return (dispatch) => {
    dispatch({
      type: ONLINE_REQUEST,
      data: ''
    })
    Ajax({
      api: 'onlineApply',
      data: {
        data: params
      }
    }, json => {
      var code = json.code;
      if (code == 20000) {
        dispatch({
          type: ONLINE_SUCCESS,
          data: json
        })
        message.success('操作成功');
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
        type: ONLINE_FAILED,
        data: json
      })
      message.error('服务器错误，请重试');
    })
  }
}
//显示隐藏
export function statusChange(params,callback){
   var defaultParam = {},
   params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
  return (dispatch) => {
        dispatch({
            type: STATUSCHANGE_REQUEST,
            data: ''
        })
        Ajax({
            api: 'statusChange',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: STATUSCHANGE_SUCCESS,
                    data: json
                })
                 message.success('操作成功');
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
                type: STATUSCHANGE_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//获取服务列表
export function getServerList(params) {
    var defaultParam = {},
        params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
    return (dispatch) => {
        dispatch({
            type: GETSERVERLIST_REQUEST,
            data: ''
        })
        Ajax({
            api: 'serverLists',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: GETSERVERLIST_SUCCESS,
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
                type: GETSERVERLIST_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//获取开启物业公司
export function getCompanyList(params) {
    var defaultParam = {},
        params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
    return (dispatch) => {
        dispatch({
            type: GETCOMPANYLIST_REQUEST,
            data: ''
        })
        Ajax({
            api: 'getcompanyList',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: GETCOMPANYLIST_SUCCESS,
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
                type: GETCOMPANYLIST_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//临停二维码
export function parkQrcode(params,callback){
   var defaultParam = {},
   params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
  return (dispatch) => {
        dispatch({
            type: PARKINGCODE_REQUEST,
            data: ''
        })
        Ajax({
            api: 'parkQrcode',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: PARKINGCODE_FAILED,
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
                type: PARKINGCODE_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//小区二维码
export function siteQrcode(params,callback){
   var defaultParam = {},
   params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
  return (dispatch) => {
        dispatch({
            type: SITECODE_REQUEST,
            data: ''
        })
        Ajax({
            api: 'siteQrcode',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: SITECODE_FAILED,
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
                type: SITECODE_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
//测试支付二维码
export function testPay(params,callback){
  var defaultParam = {},
    params = Object.assign({}, defaultParam, params);
  params = JSON.stringify(params);
  return (dispatch) => {
    dispatch({
      type: TEXTPAY_REQUEST,
      data: ''
    })
    Ajax({
      api: 'testPay',
      data: {
        data: params
      }
    }, json => {
      var code = json.code;
      if (code == 20000) {
        dispatch({
          type: TEXTPAY_SUCCESS,
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
        type: TEXTPAY_FAILED,
        data: json
      })
      message.error('服务器错误，请重试');
    })
  }
}
//小区二维码
export function siteLife(params,callback){
   var defaultParam = {},
   params = Object.assign({}, defaultParam, params);
    params = JSON.stringify(params);
  return (dispatch) => {
        dispatch({
            type: SITELIFE_REQUEST,
            data: ''
        })
        Ajax({
            api: 'siteLife',
            data: {
                data: params
            }
        }, json => {
            var code = json.code;
            if (code == 20000) {
                dispatch({
                    type: SITELIFE_SUCCESS,
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
                type: SITELIFE_FAILED,
                data: json
            })
            message.error('服务器错误，请重试');
        })
    }
}
