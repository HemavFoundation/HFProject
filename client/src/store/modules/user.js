const state = {
  userName: '',
  password: '',
  token: ''
}

const actions = {
  setUserName({commit}, userName) {
    commit('SET_USER_NAME', userName)
  },
  setUserPassword({commit}, password) {
    commit('SET_USER_PASSWORD', password)
  },
  setToken({commit}, token) {
    commit('SET_TOKEN', token)
  }
}

const mutations = {
  SET_USER_NAME(state, userName) {
    state.userName = userName
  },
  SET_USER_PASSWORD(state, password) {
    state.password = password
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const getters = {
  getUserName(state) {
    return state.userName
  },
  getUserPassword(state) {
    return state.password
  },
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