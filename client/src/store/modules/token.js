const state = {
    token: ''
  }
  
  const actions = {
    setToken({commit}, token) {
      commit('SET_TOKEN', token)
    }
  }
  
  const mutations = {
    SET_TOKEN(state, token) {
      state.token = token
    }
  }
  
  const getters = {
    getToken(state) {
      return state.token
    }
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
  }