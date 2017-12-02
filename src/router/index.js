import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import List from '@/pages/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/list/:id',
      name:'List',
      component:List
    }
  ]
})
