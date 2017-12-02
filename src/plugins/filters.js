"use strict";

const reverseStr = str => {//字符串反转
    if(typeof str !== 'string') return str;
    return str.split('').reverse().join('')
}

const limitStr = (str,n) => {//字符串截取
    if(typeof str !== 'string') return str;
    return str.substr(0,n)
}

export {
    reverseStr,
    limitStr
}