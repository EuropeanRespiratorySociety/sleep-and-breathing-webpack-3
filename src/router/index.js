import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/Bar'
import Simple from '@/components/Simple'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: App
    },
    {
      path: '/simple',
      name: 'Simple',
      component: Simple
    }
  ]
})
