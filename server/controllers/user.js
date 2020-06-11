'use strict'

const mongoose = require ('mongoose')
const User = require ('../models/user')
const service = require('../services')

//no creamos un password porque como vemos en el user.js ya tenemos una funcion de mongoose que presalva la contra hasheada
function signUp (req,res) {
    const user = new User({
        // userRol: req.body.userRol,
        // displayName: req.body.displayName,
        name: req.body.name,
        // surName: req.body.surName,
        // userNameId: req.body.userNameId,
        // country: req.body.country,
        email: req.body.email,
        password: req.body.password
    })

    user.save((err) =>{
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`, error: true})

        //return res.status(200).send({ token: service.createToken(user)})
        return res.status(200).send({ message: 'Usuario registrado correctamente', status: 'ok'})
    })
}

function signIn(req,res) {
    User.findOne({email: req.body.email, password: req.body.password}, (err, user) =>{
        if (err) return res.status(500).send({message: err})

        if (!user) return res.status(404).send({message: 'No existe el usuario'})

        req.user= user
        res.status(200).send({
            message: 'Logueado correctamente',
            token: service.createToken(user),
            email: user.email,
            name : user.name
        })
    })
}
function updateUser(req,res) {
    let UserId = req.params.UserId
    let update = req.body
   
    User.findByIdAndUpdate(UserId, update, (err,userUpdated)=>{
       if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})
   
       res.status(200).send({ user: userUpdated})
   
    })
}


module.exports = {
    signUp,
    signIn,
    updateUser
}