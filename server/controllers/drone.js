'use strict'

const Drone = require('../models/drone')

//devulve la info de un dron
function getDrone (req,res) {
    let droneId = req.params.droneId

 Drone.findById(droneId, (err,drone) => {
     if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
     if(!drone) return res.status(404).send({message: `El dron no existe`})

    res.status(200).send({drone: drone})
 })

}
//devuelve la info de todos los drones de la BD
function getDrones (req,res) {
    Drone.find({}, (err,drones) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!drones) return res.status(404).send({message: 'No existen drones'})
    
        res.send(200,{drones})
    })
}
//guarda un dron en la BD
function saveDrone (req,res) {
 console.log('POST /api/drone')
 console.log(req.body)

 let drone = new Drone()
 drone.name = req.body.name
 drone.picture =req.body.picture
 drone.updated_date = req.body.updated_date
 drone.updated_hour = req.body.updated_hour
 drone.postition_lat = req.body.postition_lat
 drone.postition_lon = req.body.postition_lon
 drone.postition_alt = req.body.postition_alt
 drone.flight_time = req.body.flight_time
 drone.ETA = req.body.ETA

 drone.save((err, droneStored)  => {
     if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

     res.status(200).send({drone: droneStored})
 })
}
function updateDrone(req,res) {
    let droneId = req.params.droneId
    let update = req.body
   
    Drone.findByIdAndUpdate(droneId, update, (err,droneUpdated)=>{
       if (err) res.status(500).send({message: `Error al actualizar el dron: ${err}`})
   
       res.status(200).send({ drone: droneUpdated})
   
    })
}

function deleteDrone (req,res){
    let droneId = req.params.droneId

    Drone.findById(droneId,(err,drone) => {
        if (err) res.status(500).send({message: `Error al borrar el dron: ${err}`})

        drone.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el dron: ${err}`})
            res.status(200).send({message: 'El dron ha sido eliminado'})
        })
    })
}


module.exports = {
    getDrone,
    getDrones,
    saveDrone,
    updateDrone,
    deleteDrone
}