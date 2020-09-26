'use strict'

const Flight = require('../models/flights')
const services = require('../services')
const mongoose = require('mongoose')

const { db } = require('../models/drone')
const { stringify } = require('querystring')

function getFlightDetails (req,res) {
    Flight.find({}, (err,flight) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!flight) return res.status(404).send({message: 'No existen vuelos'})
    
        res.status(200).send(flight)
    })
}





//store result.json in mongo db. bool function that once recognized user id, then checks flight id one by one and stores all data in the database

function storeFlights(req,res) {

    let flights_data = req.body;
    console.log(flights_data)
    //results.json only for testing. Here we will have to put the usb path that the user will use.
    const fs = require('fs');
    let flights_data_parsed = JSON.parse(flights_data)
    //see fs.readfilesync because could be better when using directory instead of results.json
    fs.readFileSync('doc', (err, data) => {

        console.log('@@@@@@@@@@@@@@@@@@@@@',data);
        if (err) return res.status(500).send({ message: `Error al leer el json de prueba: ${err}` });

        //convert to JSON format 
        var flight = JSON.parse(data)


        flight.dataOfFlights.forEach(async flightData => {
            var idplate = flightData.id_plate;
            var original_id = mongoose.Types.ObjectId();
            var result = await db.collection('drones').findOne({ IdPlate: idplate });
            original_id = result._id;
            db.collection('flights').insertOne(
                {
                    "dronedbID": original_id,
                    ...flightData
                },
                { upsert: true }
            )
            res.status(200).send({message:'Resultados del JSON leidos y guardados correctamente'})
        });

    });

}


module.exports = {
    getFlightDetails,
    storeFlights
}