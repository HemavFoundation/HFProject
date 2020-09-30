const state = {
    IdPlate: '',
    Owner: '',
    PilotsAssigned: '',
    PersonInCharge: '',
    Manufacturer: '',
    MadeDate: '',
    Country: '',
  }
  
  const actions = {
    setDroneIdPlate({commit}, IdPlate) {
      commit('SET_DRONE_IDPLATE', IdPlate)
    },
    setDroneOwner({commit}, Owner) {
      commit('SET_DRONE_OWNER', Owner)
    },
    setDronePilotsAssigned({commit}, PilotsAssigned) {
      commit('SET_DRONE_PILOTSASSIGNED', PilotsAssigned)
    },
    setDronePersonInCharge({commit}, PersonInCharge) {
      commit('SET_DRONE_PERSONINCHARGE', PersonInCharge)
    },
    setDroneManufacturer({commit}, Manufacturer) {
      commit('SET_DRONE_MANUFACTURER', Manufacturer)
    },
    setDroneMadeDate({commit}, MadeDate) {
      commit('SET_DRONE_MADEDATE', MadeDate)
    },
    setDroneCountry({commit}, Country) {
      commit('SET_DRONE_COUNTRY', Country)
    }
  }
  
  const mutations = {
    SET_DRONE_IDPLATE(state, IdPlate) {
      state.IdPlate = IdPlate
    },
    SET_DRONE_OWNER(state, Owner) {
      state.Owner = Owner
    },
    SET_DRONE_PILOTSASSIGNED(state, PilotsAssigned) {
      state.PilotsAssigned = PilotsAssigned
    },
    SET_DRONE_PERSONINCHARGE(state, PersonInCharge) {
      state.PersonInCharge = PersonInCharge
    },
    SET_DRONE_MANUFACTURER(state, Manufacturer) {
      state.Manufacturer = Manufacturer
    },
    SET_DRONE_MADEDATE(state, MadeDate) {
      state.MadeDate = MadeDate
    },
    SET_DRONE_COUNTRY(state, Country) {
      state.Country = Country
    }
  }
  
  const getters = {
    getDroneIdPlate(state) {
      return state.IdPlate
    },
    getDroneOwner(state) {
      return state.Owner
    },
    getDronePilotsAssigned(state) {
      return state.PilotsAssigned
    },
    getDronePersonInCharge(state) {
      return state.PersonInCharge
    },
    getDroneManufacturer(state) {
      return state.Manufacturer
    },
    getDroneMadeDate(state) {
      return state.MadeDate
    },
    getDroneCountry(state) {
      return state.Country
    }
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
  }