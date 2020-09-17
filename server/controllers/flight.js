'use strict'

const Flight = require('../models/drone')
const services = require('../services')

const Drone = require('../models/drone')



//devulve la info de un vuelo
function getFlight (req,res) {
    let FlightId = req.params.FlightId

 Drone.findById(FlightId, (err,Flight) => {
     if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
     if(!Flight) return res.status(404).send({message: `El vuelo no existe`})

    res.status(200).send({Flight: Flight})
 })
}
 // voy a crear un json de prueba que contenga los flight details
 function createFlightDetails (req,res,err){
     let flight = new Flight()
     flight.IDplate = req.body.IDplate
     flight.Date=req.body.Date
     flight.Time=req.body.Time
     flight.Homecoordinates = req.body.Homecoordinates
     //faltarian region flown , flight type y flight time
    //  flight.save((err, flightStored)  => {
    //     if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
   
    //     res.status(200).send({drone: flightStored})
    
    //if (err) return res.status(500).send({message: 'Error al crear el json'})
    // res.status(200).send({
    //     message: 'Json con flight details generado correctamente',
    //     token: services.createToken(flight),
    //     drone: droneStored
        
    // })
    flight.save((err, flightStored)  => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
   
        res.status(200).send({
            flight: flightStored,
            message: 'Json con flight details generado correctamente',
            token: services.createToken(flight.IDplate),})
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
        if (err) return res.status(500).send({message: `Error al al hacer el get flight details: ${err}`})
        if (!IDplate) return res.status(404).send({message: 'No existe el IDplate'})
        req.flight = flight
        res.send(200,{flight})

        
        

        })
}


//test con random json
function storeJSON (req,res){
    const fs = require('fs');
    let flightData = fs.readFileSync('/ejemploJSON.json');  
    let flights = JSON.parse(flightData);  
    // console.log(flights); 
    // let flight = new Flight()
    // flights.IDplate = req.body.IDplate
    // flights.Date=req.body.Date
    // flights.Time=req.body.Time
    // flights.Homecoordinates = req.body.Homecoordinates

//    flight.save((err, flightStored)  => {
//        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
  
//        res.status(200).send({
//            flight: flightStored,
//            message: 'Json con flight details guardado correctamente',
//            token: services.createToken(flight.IDplate),})
//    })
// Insert JSON straight into MongoDB
    db.collection('flights').insert(flights, function (err, res) {
        if (err) res.status(500).send({message: `Error al crear el vuelo: ${err}`, error: true})

        //return res.status(200).send({ token: service.createToken(user)})
        return res.status(200).send({ message: 'Vuelo registrado correctamente', status: 'ok'})

});
}


module.exports = {
    getFlight,
    createFlightDetails,
    getFlightDetails,
    storeJSON
}