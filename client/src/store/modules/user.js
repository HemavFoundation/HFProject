const state = {
  userName: '',
  surName: '',
  password: '',
  token: '',
  email: '',
}

const actions = {
  setUserName({commit}, userName) {
    commit('SET_USER_NAME', userName)
  },
  setUserSurName({commit}, surName) {
    commit('SET_USER_SURNAME', surName)
  },
  setEmail({commit}, email) {
    commit('SET_EMAIL', email)
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
  SET_USER_SURNAME(state, surName) {
    state.surName = surName
  },
  SET_EMAIL(state, EMAIL) {
    state.email = email
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
  },
  getSurName(state) {
    return state.surName
  },
  getEmail(state) {
    return state.email
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}