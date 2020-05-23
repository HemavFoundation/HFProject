'use strict'
 

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

//mas info en https://www.npmjs.com/package/jwt-simple
//iat indica cuando fue creado el token / exp indica cuando caduca (14 dias)
//esto es lo que viaja en el header del url asi que contra menos info mejor
function createToken(user){
 const payload = {
     sub: user._id,
     iat: moment().unix(),
     exp: moment().add(1, 'month').unix(),
 }

 return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token,config.SECRET_TOKEN)
            if (payload.exp <= moment.unix()) {
                reject ({
                    status: 401,
                    message: 'El token ha expirado'

                })
                
            }

            resolve(payload.sub)

        } catch(err){
            reject({
                status: 500,
                message: 'Invalid token'

            })
        }
    })

    return decoded
}
module.exports = {
    createToken,
    decodeToken
}