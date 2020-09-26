'use strict'

const Flight = require('../models/flights')
const services = require('../services')
const mongoose = require('mongoose')

const { db } = require('../models/drone')
const { stringify } = require('querystring')

function getFlightDetails(req, res) {
    Flight.find({}, (err, flight) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!flight) return res.status(404).send({ message: 'No existen vuelos' })

        res.status(200).send(flight)
    })
}





//store result.json in mongo db. bool function that once recognized user id, then checks flight id one by one and stores all data in the database

function storeFlights(req, res) {

    let flights_data = req.body;
    
    flights_data.dataOfFlights.forEach(async flightData => {
        var idplate = flightData.id_plate;
        var original_id = mongoose.Types.ObjectId();
        var result = await db.collection('drones').findOne({ IdPlate: idplate });
        original_id = result._id;
        try {
            db.collection('flights').insertOne(
                {
                    "dronedbID": original_id,
                    ...flightData
                },
                { upsert: true }
            ),
            res.status(200).send({ message: 'Resultados del JSON leidos y guardados correctamente' })
        } catch (e) {
            print(e);
            res.status(500).send({ message: e })
        }
    })
}


module.exports = {
    getFlightDetails,
    storeFlights
}