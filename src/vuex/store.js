
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  actions: {
    TOGGLE_DRAWER ({ commit }) {
      commit('SET_DRAWER', err => { console.log(err) })
    }
  },
  state: {
    drawer: false
  },
  mutations: {
    SET_DRAWER (state) {
      state.drawer = !state.drawer
    }
  }
})
