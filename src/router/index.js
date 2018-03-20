import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Home from '@/components/Home'
import Article from '@/components/Article'
import P from '@/components/PracticalInformation'

// import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/practical-information',
      name: 'practical-information',
      component: P
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   next(vm => {
//     const slug = store.getters.slug
//     vm.store.dispatch('setCategoryKey', slug)
//     vm.store.dispatch('setArticlesKey', slug)
//   })
// })

export default router
