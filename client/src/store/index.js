import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import token from './modules/token'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    token
  }
})
