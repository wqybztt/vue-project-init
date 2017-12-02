"use strict";
import axios from 'axios';
import types from  './types';

const INSTANCE = axios.create({
    baseURL:'/api',
    timeout:5000
});

export default {
    [types.EXAMPLE](params){
        return INSTANCE.get('/example',{params})
    }
}