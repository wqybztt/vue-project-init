// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'

//自定义插件
import plugins from './plugins'
Vue.use(plugins)

import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
