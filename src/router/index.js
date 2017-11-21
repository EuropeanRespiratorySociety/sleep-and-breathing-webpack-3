import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Category
    },
    {
      path: '/programme',
      name: 'Programme',
      component: Category
    },
    {
      path: '/articles/:slug',
      name: 'Article',
      component: Article
    }
  ]
})
