'use strict'

const mongoose = require ('mongoose')
const User = require ('../models/user')
const service = require('../services')
const user = require('../models/user')

//no creamos un password porque como vemos en el user.js ya tenemos una funcion de mongoose que presalva la contra hasheada
function signUp (req,res) {
    const user = new User({
        // userRol: req.body.userRol,
        // displayName: req.body.displayName,
        userName: req.body.userName,
        surName: req.body.surName,
        userNameId: req.body.userNameId,
        country: req.body.country,
        email: req.body.email,
        password: req.body.password,

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
            userName : user.userName,
            surName: user.surName,
            userNameId: user.userNameId,
            country: user.country,
            userDBId: user.id
        })
    })
}
function updateUser(req,res) {
    let userDBId = req.params.userDBId
    let update = req.body

    mongoose.set('useFindAndModify', false); //para evitar el deprecation warning

    User.findByIdAndUpdate(userDBId, update, (err,userUpdated)=>{
       if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})

       res.status(200).send({ user: userUpdated})
    
    })
}

// function getUserId(req) {
//     let userID = res.body.id;
//     User.findOne({'_id': user_id}, (err, userID) => {
//         if(err) {
//             return res.json(err);
//         }
//         return res.json(userID);
//     })
// }


module.exports = {
    signUp,
    signIn,
    updateUser,
    //getUserId
}