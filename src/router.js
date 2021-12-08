import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    }
  ]
})
