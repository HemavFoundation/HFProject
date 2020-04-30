const state = {
  userName: '',
  password: ''
}

const actions = {
  setUserName({commit}, userName) {
    commit('SET_USER_NAME', userName)
  },
  setUserPassword({commit}, password) {
    commit('SET_USER_PASSWORD', password)
  }
}

const mutations = {
  SET_USER_NAME(state, userName) {
    state.userName = userName
  },
  SET_USER_PASSWORD(state, password) {
    state.password = password
  }
}

const getters = {
  getUserName(state) {
    return state.userName
  },
  getUserPassword(state) {
    return state.password
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}