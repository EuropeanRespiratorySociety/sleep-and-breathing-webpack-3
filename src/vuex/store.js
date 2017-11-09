
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { HTTP } from '../helpers/http'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  actions: {
    TOGGLE_DRAWER ({ commit }) {
      commit('SET_DRAWER', err => { console.log(err) })
    },
    GET_NEWS ({ commit, dispatch }, payload) {
      let data = {skip: 0, pageNumber: 1}
      if (payload.pageNumber > 1) {
        data.pageNumber = payload.pageNumber
        data.skip = payload.limit * data.pageNumber
      }
      const route = `${payload.slug}?limit=25&skip=${data.skip}`
      HTTP
      .get(route)
      .then(response => {
        data.limit = response.data._sys.limit
        data.items = response.data.data
        data.category = response.data.category[0]
        data.skip = response.data._sys.skip
        data.length = Math.ceil(response.data._sys.total / data.limit)

        dispatch('PAGE_NUMBER', data.pageNumber)
        commit('SET_NEWS', data, err => { console.log(err) })
      })
      .catch(e => {
        console.log(e)
      })
    },
    PAGE_NUMBER ({commit}, payload) {
      commit('SET_PAGE_NUMBER', payload, err => { console.log(err) })
    }
  },
  state: {
    drawer: false,
    category: {},
    news: [],
    pageNumber: 1,
    skip: 0,
    limit: 25,
    length: 0
  },
  mutations: {
    SET_DRAWER (state) {
      state.drawer = !state.drawer
    },

    SET_NEWS (state, data) {
      state.length = data.length
      state.limit = data.limit
      state.skip = data.skip
      state.category = data.category
      state.pageNumber = data.pageNumber
      // state.news.push(data.items)
      state.news = data.items
    },

    SET_PAGE_NUMBER (state, value) {
      state.pageNumber = value
    }
  },
  plugins: [vuexLocal.plugin]
})

