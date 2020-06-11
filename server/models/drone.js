'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DroneSchema = Schema ({
    IdPlate: String,
    Manufacturer: String,
    MadeDate: { type:Number, default: 0},
    Owner: String,
    PersonInCharge: String,
    PilotsAssigned: String,
    Country: String,
})

module.exports = mongoose.model('Drone', DroneSchema)