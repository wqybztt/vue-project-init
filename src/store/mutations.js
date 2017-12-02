"use strict";
import _ from 'lodash';
import types from './types';
export default {
    [types.ERROR](state,error){
        state.error = error;
    },
    [types.EXAMPLE](state,data){
        state.example = data;
    }
}