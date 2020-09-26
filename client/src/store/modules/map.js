const state = {
    lat: '',
    lon: '',
    dronesLiveLocations: []
}

const actions = {
    setLat({commit}, lat) {
        commit('SET_LATITUDE', lat)
    },
    setLon({commit}, lon) {
        commit('SET_LONGITUD', lon)
    },
    setDronesLocations({commit}, locations = [] ) {
        commit('SET_DRONES_LOCATIONS', locations)
    }
}

const mutations = {
    SET_LATITUDE(state, lat) {
        state.lat = lat
    },
    SET_LONGITUD(state, lon){
        state.lon = lon
    },
    SET_DRONES_LOCATIONS(state, locations) {
        state.dronesLiveLocations = locations
    }
}

const getters = {
    getLat(state){
        return state.lat
    },
    getLon(state){
        return state.lon
    },
    getDronesLocations(state) {
        return state.dronesLiveLocations
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}