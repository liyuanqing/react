'use strict';

import api from './apimap';
import Reqwest from 'reqwest';

var tools = {
  /*
   * 调用改核心方法 统一接口处理
   * */
  fetchData: function (param, suc = ()=>{}, err= ()=>{}) {

    var self = this;
    if (this.isString(param)) {
      param = {api: param};
    }
    var arrApi = this._getApi(param.api);

    param.url = param.url || arrApi[0];
    param.method = param.method || arrApi[1];
    param.type = param.type || 'json';
    if(param.method === 'jsonp'){
      param.method = 'get';
      param.type = 'jsonp';
    }
    param.success = function (res = {}) {
       suc(res);
    };
    param.error= function (error) {
      err(error);
    };
    return Reqwest(param);
  },
  getToken() {
    var $token = document.getElementsByName('_tb_token_');
    return $token.length ? $token[0].value : '';
  },
  isDaily(){
    var host = window.location.host;
    return host.indexOf('daily') > -1;
  },

  getUrlParam: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  _getApi: function (type) {
    
    // Ajax.url not set
    if(!type) return ['','get'];

    var arr = api[type];
    if (!arr) {
      console && console.warn && console.warn('api:%s not found in apimap.js', type);
      return ['','get'];
    } else if (this.isString(arr)) {
      arr = [arr, 'get'];
    }
    //
    arr = arr.concat([]);

    var location = window.location;
    var hostname = location.hostname;

    //本地 mock
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === 'local.place.daily.taobao.net') {
      //使用本地代理
      if (location.href.indexOf('proxyurl') > -1) {
        arr = '/data/' + type + '.json?proxyUrl=http://place.daily.taobao.net' + arr[0];
      } else {
        arr = ['/data/' + type + '.json']
      }
    } else {
      if (!/^(http:\/\/|\/\/)/i.test(arr[0])) {
        arr[0] = location.protocol + '//' + hostname + ((location.port && location.port != 80) ? ':' + location.port : '') + arr[0]
      }
    }
    //添加通用参数
    if(arr[0].indexOf('?') === -1){
      arr[0] +='?';
    }else{
      arr[0] +='&';
    }
    arr[0] += '_tb_token_=' + this.getToken();
    arr[0] += '&_input_charset=utf-8';

    return arr;
  },
  isArray: function (object) {
    return object instanceof Array
  },
  isWindow: function (obj) {
    return obj != null && obj == obj.window
  },
  isDocument: function (obj) {
    return obj != null && obj.nodeType == obj.DOCUMENT_NODE
  },
  isObject: function (obj) {
    return this._type(obj) == "object"
  },
  isFunction: function (fn) {
    return this._type(fn) == "function"
  },
  isPlainObject: function (obj) {
    return this.isObject(obj) && !this.isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  },
  _type: function (obj) {
    var class2type = {};
    var toString = class2type.toString;
    return obj == null ? String(obj) :
    class2type[toString.call(obj)] || "object"
  },
  isString: function (str) {
    return typeof str === 'string'
  },
  extend: function (target, source) {
    target = target || {};
    source = source || {};
    for (var key in source) {
      target[key] = source[key]
    }
    return target;

  },
  namespace: function(name) {
    return function(v) {
        return name+'-'+v;
    }
  }
};

export const NameSpace = tools.namespace.bind(tools);
export const Ajax = tools.fetchData.bind(tools);
export default tools;
