'use strict'

const productCtrl = require('../controllers/product')
const droneCtrl = require('../controllers/drone')
const express = require('express')
const userCtrl=require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


//el auth me permite pedir autorizacion mediante un token (que va en la cabecera bearer) para poder hacer algunas acciones como post o delete. El get de product no necesito porque si que todo el mundo debe poder ver los productos

//rutas autenticación
api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)

//rutas dron
api.get('/drone',droneCtrl.getDrones)
api.get('/drone/:droneId', droneCtrl.getDrone)
api.post('/drone',droneCtrl.saveDrone) // debo usar la autenticación (Auth) para guardar un dron
api.put('/drone/:droneId',auth, droneCtrl.updateDrone)
api.delete('/drone/:droneId',auth, droneCtrl.deleteDrone)

module.exports = api