"use strict";
import api from './api';
import types from './types';

export default {
    [types.EXAMPLE]({state,commit},params){
        api[types.EXAMPLE](params).then(res=>{
            commit(types.EXAMPLE,res.data);
        }).catch(err=>{
            commit(types.ERROR,err.message);
        });
    }
}