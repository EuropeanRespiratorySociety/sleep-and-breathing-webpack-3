
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import base from './modules/base/store'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

import paths from '../router/paths'

const keys = paths.reduce((a, i) => {
  a[i.path] = {}
  return a
}, {})

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  modules: {
    base
  },
  state: {
    pages: keys,
    offline: false,
    pageNumber: 1,
    skip: 0,
    limit: 25,
    length: 0
  },
  getters,
  actions,
  mutations: mutations.default,
  plugins: [vuexLocal.plugin]
})

