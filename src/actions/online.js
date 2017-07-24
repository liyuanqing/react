'use strict';

import { NameSpace } from '../util/index';

let ns = NameSpace('Online');
export const ADD_TEXT = ns('ADD_TEXT');

export function addText(text){
	return {
            type : ADD_TEXT,
            data : text
        };
}
