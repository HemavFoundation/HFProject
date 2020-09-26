'use strict'

const droneCtrl = require('../controllers/drone')
const flightCtrl = require('../controllers/flight')
const express = require('express')
const userCtrl=require('../controllers/user')
const auth = require('../middlewares/auth')
const rockblock = require('../controllers/rockblock')
const api = express.Router()


//el auth me permite pedir autorizacion mediante un token (que va en la cabecera bearer) para poder hacer algunas acciones como post o delete. El get de product no necesito porque si que todo el mundo debe poder ver los productos

//rutas autenticación
api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)

api.put('/updateUser/:userDBId',auth, userCtrl.updateUser)


//rutas dron
api.get('/drone',droneCtrl.getDrones)
api.get('/drone/:droneId', droneCtrl.getDrone)
api.post('/drone',auth,droneCtrl.saveDrone) // debo usar la autenticación (Auth) para guardar un dron
api.put('/drone/:droneId',auth, droneCtrl.updateDrone)
api.delete('/drone/:droneId',auth, droneCtrl.deleteDrone)

//rutas vuelos
api.post('/flight',flightCtrl.storeJSON)
 
//rockblock
api.post("/recieveLocation", rockblock.recieveLocation)
api.get('/lastDronesLocation', rockblock.getFlightsLocations)

module.exports = api