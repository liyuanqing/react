'use strict';

import {Ajax, NameSpace } from '../util/index';

let ns = NameSpace('Audited');

export const TEST = ns('TEST');

export function test(){
  return (dispatch) => {

  Ajax({
      api: 'page2List',
      method: 'get',
      data: {}
  },json => {

      dispatch({
          type : TEST,
          data : json.data
      });
  });
}
}
