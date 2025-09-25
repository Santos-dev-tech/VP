import { createStore } from 'vuex'

export default createStore({
  state: {
    api_url : 'http://127.0.0.1:8000/',
    logged_in : localStorage.getItem('logged_in'),
    username : localStorage.getItem('username'),
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
