'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//algoritmo que encripta las constraseñas para aumentar la seguridad
const bcrypt = require('bcrypt-nodejs')
const crypto = require ('crypto')

//el lowercase es para que guarde todos los emails en letra minuscula
const UserSchema = new Schema({
    email: {type: String, unique: true, lowercase:true},
    displayName: String,
    avatar: String,
    password: {type:String, select:false},
    signupDate: { type: Date, default: Date.now()},
    lastLogin: Date
})

//preguarda la contraseña hasheada para aumentar la seguridad
UserSchema.pre('save',function (next){
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10,(err,salt) =>{
        if (err) return next(err)

        bcrypt.hash(user.password, salt, null, (err,hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })

    })
})

//usamos un metodo de mongoose que autocrea un avatar
UserSchema.methods.gravatar=function(){
    if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports=mongoose.model('User',UserSchema)