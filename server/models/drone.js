'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DroneSchema = Schema ({
    IDplate: String,
    Manufacturer: String,
    Madedate: { type:Number, default: 0},
    Owner: String,
    Personincharge: String,
    Pilotsassigned: String,
    Country: String,
})

module.exports = mongoose.model('Drone', DroneSchema)