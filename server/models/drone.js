'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DroneSchema = Schema ({
    name: String,
    picture: String,
    updated_date: { type:Number, default: 0},
    updated_hour: { type:Number, default: 0},
    postition_lat: { type:Number, default: 0},
    postition_lon: { type:Number, default: 0},
    postition_alt: { type:Number, default: 0},
    flight_time: { type:Number, default: 0},
    ETA: { type:Number, default: 0},
})

module.exports = mongoose.model('Drone',DroneSchema)