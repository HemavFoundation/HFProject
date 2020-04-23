'use strict'

const productCtrl = require('../controllers/product')
const express = require('express')
const userCtrl=require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


//el auth me permite pedir autorizacion mediante un token (que va en la cabecera bearer) para poder hacer algunas acciones como post o delete. El get de product no necesito porque si que todo el mundo debe poder ver los productos
api.get('/product',productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product',auth, productCtrl.saveProduct)
api.put('/product/:productId',auth, productCtrl.updateProduct)
api.delete('/product/:productId',auth, productCtrl.deleteProduct)
api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)
api.get('/private',auth, (req,res) => {
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api