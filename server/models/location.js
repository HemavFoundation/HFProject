'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = Schema ({
    id_plate: String,
    time: String,
    lat: { type:Number, default: 0},
    lon: { type:Number, default: 0},
    alt: { type:Number, default: 0},
    heading: { type:Number, default: 0}
})

module.exports = mongoose.model('Location', LocationSchema)