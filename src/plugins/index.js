import * as filters from './filters';//自定义过滤器

export default {
  install:function (Vue, options) {
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    });
  }
}