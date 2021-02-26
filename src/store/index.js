import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/auth'

Vue.use(Vuex)

const getters = {
  token: function(state) {
    return getToken()
  },
  userInfo: function(state) {
    return JSON.parse(localStorage.getItem('userInfo'))
  }
}

export default new Vuex.Store({
  state: { token: '', userInfo: {}},
  mutations: {
    setToken: function(state, token) {
      setToken(token)
      state.token = token
    },
    setUserInfo: function(state, userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      state.userInfo = userInfo
    }
  },
  getters,
  actions: {},
  modules: {}
})
