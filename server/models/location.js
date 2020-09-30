'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = Schema ({
    id_plate: String,
    time: String,
    status: { type:Number, default: null},
    lat: { type:Number, default: null},
    lon: { type:Number, default: null},
    alt: { type:Number, default: null},
    heading: { type:Number, default: null},
    mission: { type:String, default: null},
})

module.exports = mongoose.model('Location', LocationSchema)