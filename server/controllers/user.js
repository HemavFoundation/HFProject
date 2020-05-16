'use strict'

const mongoose = require ('mongoose')
const User = require ('../models/user')
const service = require('../services')

//no creamos un password porque como vemos en el user.js ya tenemos una funcion de mongoose que presalva la contra hasheada
function signUp (req,res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
<<<<<<< HEAD
=======
        name: req.body.name,
        surName: req.body.surName,
        userNameId: req.body.userNameId,
        country: req.body.country,
        userRol: req.body.userRol,
>>>>>>> dc7bb7091fb49e5cb713e1033bb94a20affcfbde
    })

    user.save((err) =>{
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})

        //return res.status(200).send({ token: service.createToken(user)})
        return res.status(200).send({ message: 'Usuario registrado correctamente'})

    })
}

function signIn(req,res) {
    User.find({email: req.body.email}, (err,user) =>{
        if (err) return res.status(500).send({message: err})
        if (!user) return res.status(404).send({message: 'No existe el usuario'})

        req.user= user
        res.status(200).send({
            message: 'Logueado correctamente',
            token: service.createToken(user)
        })
    })
}


module.exports = {
    signUp,
    signIn,
    
}