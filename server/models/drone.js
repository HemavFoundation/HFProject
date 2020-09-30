'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DroneSchema = Schema ({
    IdPlate: String,
    Manufacturer: String,
    MadeDate: Date,
    Owner: String,
    PersonInCharge: String,
    PilotsAssigned: String,
    Country: String,
})

module.exports = mongoose.model('Drone', DroneSchema)