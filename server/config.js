
//este SECRET_TOKEN se debe cambiar a uno mas largo y menos descifrable
module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'miclavedetokens'
}   