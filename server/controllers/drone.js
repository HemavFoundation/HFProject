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

 const drone = new Drone({
    IdPlate:req.body.IdPlate,
    Manufacturer:req.body.Manufacturer,
    Madedate:req.body.Madedate,
    Owner:req.body.Owner,
    Personincharge:req.body.Personincharge,
    Pilotassigned:req.body.Pilotassigned,
    Country:req.body.Country,
   
 })


 drone.save((err)  => {
     if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

     return res.status(200).send({message: "Dron guardado correctamente en la bd",status:'ok'})
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