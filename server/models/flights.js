'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FlightSchema = Schema ({
    name: String
})

module.exports = mongoose.model('Flight',FlightSchema)