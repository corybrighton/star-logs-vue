import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Auth from './views/Auth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }, {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
