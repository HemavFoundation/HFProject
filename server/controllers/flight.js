'use strict'

const Flight = require('../models/drone')

//devulve la info de un vuelo
function getFlight (req,res) {
    let FlightId = req.params.FlightId

 Drone.findById(FlightId, (err,Flight) => {
     if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
     if(!Flight) return res.status(404).send({message: `El vuelo no existe`})

    res.status(200).send({Flight: Flight})
 })

}
module.exports = {
    getFlight,

}