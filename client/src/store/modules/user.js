const state = {
  userName: '',
  surName: '',
  password: '',
  token: '',
  email: '',
  country: '',
  userNameId: '',
  userDBId: '',
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
  },
  setCountry({commit}, country) {
    commit('SET_COUNTRY', country)
  },
  setUserNameId({commit}, userNameId) {
    commit('SET_USERNAMEID', userNameId)
  },
  setUserDBId({commit}, userDBId) {
    commit('SET_USERDBID', userDBId)
  },
}

const mutations = {
  SET_USER_NAME(state, userName) {
    state.userName = userName
  },
  SET_USER_SURNAME(state, surName) {
    state.surName = surName
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_USER_PASSWORD(state, password) {
    state.password = password
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_COUNTRY(state, country) {
    state.country = country
  },
  SET_USERNAMEID(state, userNameId) {
    state.userNameId = userNameId
  },
  SET_USERDBID(state, userDBId) {
    state.userDBId = userDBId
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
  getCountry(state) {
    return state.country
  },
  getUserNameId(state) {
    return state.userNameId
  },
  getUserDBId(state) {
    return state.userDBId
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}