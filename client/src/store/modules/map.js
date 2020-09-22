const state = {
    lat: '',
    lon: ''
}

const actions = {
    setLat({commit}, lat) {
        console.log("set", lat)
        commit('SET_LATITUDE', lat)
    },
    setLon({commit}, lon) {
        console.log("set", lon)
        commit('SET_LONGITUD', lon)
    }
}

const mutations = {
    SET_LATITUDE(state, lat) {
        state.lat = lat
    },
    SET_LONGITUD(state, lon){
        state.lon = lon
    }
}

const getters = {
    getLat(state){
        return state.lat
    },
    getLon(state){
        return state.lon
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}