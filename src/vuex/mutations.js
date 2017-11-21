import * as types from './mutation-types'

export default {
  [types.SET_DRAWER] (state) {
    state.drawer = !state.drawer
  },

  [types.SET_NEWS] (state, data) {
    state.length = data.length
    state.limit = data.limit
    state.skip = data.skip
    state.category = data.category
    state.pageNumber = data.pageNumber
    // state.news.push(data.items)
    state.news = data.items
  },

  [types.SET_CATEGORY] (state, data) {
    state.length = data.length
    state.limit = data.limit
    state.skip = data.skip
    state.category = data.category
    state.pageNumber = data.pageNumber
    // state.news.push(data.items)
    state.articles = data.items
  },

  [types.SET_ARTICLE] (state, data) {
    state.article = data.item.data
  },

  [types.SET_PAGE_NUMBER] (state, value) {
    state.pageNumber = value
  }
}
