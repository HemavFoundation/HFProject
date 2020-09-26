'use strict'

const Flight = require('../models/drone')
const services = require('../services')
const mongoose = require('mongoose')

const Drone = require('../models/drone')
const { db } = require('../models/drone')
const { stringify } = require('querystring')



//devulve la info de un vuelo
function getFlight (req,res) {
    let FlightId = req.params.FlightId

 Drone.findById(FlightId, (err,Flight) => {
     if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
     if(!Flight) return res.status(404).send({message: `El vuelo no existe`})

    res.status(200).send({Flight: Flight})
 })
}

//el name del user tendra que ser el mismo que el person in charge del dron y los idplate del dron y del flight details debera ser el mismo tb
// busca en bd si ahya algun dron con el IDplate que se pasa por el payload del token del flight details
//todavia no se como relacionarlo con el usuario que esta a cargoya el flight details no contempla el nombre de la persona a cargo
function getFlightDetails(req,res,next){
    //en el payload del token tengo el IDplate; si el IDplate del token esta en la bd devuelveme el json con los flight details
    const token = req.headers.authorization.split(" ")[1]
    services.decodeToken(token)
    .then(respone=>{
        req.flight = respone
        next()
    })
    .catch(response =>{
        res.status(response.status)
    })
    Flight.find({IDplate:respone}, (err,flight)=>{
        if (err) return res.status(500).send({message: `Error al hacer el get flight details: ${err}`})
        if (!IDplate) return res.status(404).send({message: 'No existe el IDplate'})
        req.flight = flight
        res.send(200,{flight})


        })
}


//store result.json in mongo db. bool function that once recognized user id, then checks flight id one by one and stores all data in the database

function storeJSON (res){
    //results.json only for testing. Here we will have to put the usb path that the user will use.
    const fs = require('fs');

    //see fs.readfilesync because could be better when using directory instead of results.json
    fs.readFile('results.json',(err,data) =>{

        if (err) return res.status(500).send({message: `Error al leer el json de prueba: ${err}`});

        //convert to JSON format 
        var flight = JSON.parse(data)

        
       flight.dataOfFlights.forEach(async flightData => {
            var idplate= flightData.id_plate;
            var original_id = mongoose.Types.ObjectId();
            console.log(idplate);
            var result = await db.collection('drones').findOne({IdPlate: idplate});
            original_id=result._id;
            console.log(original_id);
            db.collection('flights').insertOne(
                        {
                            "dronedbID":original_id,
                            "IDplate":idplate,
                            "dataOfFlights":flightData
                        },
                        {upsert:true}
                    )
        });
        
    } );
 
}


module.exports = {
    getFlight,
    getFlightDetails,
    storeJSON
}