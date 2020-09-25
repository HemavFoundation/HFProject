'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//toda la info del flight details
const FlightSchema = Schema ({
    // FlightID: String, ???
    IDplate: String,
    Date: { type:Number, default: 0},
    Time: { type:Number, default: 0},
    Homecoordindates: { type:Number, default: 0},
    Regionflown: String,
    Flighttype: String,
    Flighttime: { type:Number, default: 0},
})

module.exports = mongoose.model('Flight',FlightSchema)