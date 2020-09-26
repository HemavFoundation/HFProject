import L from 'leaflet'
const state = {
    lat: '',
    lon: '',
    dronesLiveMarkers: []
}

const actions = {
    setLat({commit}, lat) {
        commit('SET_LATITUDE', lat)
    },
    setLon({commit}, lon) {
        commit('SET_LONGITUD', lon)
    },
    setDronesMarkers({commit}, locations = [] ) {
        const markers = locations.map(location => L.latLng(location.lat, location.lon))

        commit('SET_DRONES_MARKERS', markers)
    }
}

const mutations = {
    SET_LATITUDE(state, lat) {
        state.lat = lat
    },
    SET_LONGITUD(state, lon){
        state.lon = lon
    },
    SET_DRONES_MARKERS(state, markers) {
        state.dronesLiveMarkers = markers
    }
}

const getters = {
    getLat(state){
        return state.lat
    },
    getLon(state){
        return state.lon
    },
    getDronesMarkers(state) {
        return state.dronesLiveMarkers
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}