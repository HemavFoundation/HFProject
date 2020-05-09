
//este SECRET_TOKEN se debe cambiar a uno mas largo y menos descifrable
module.exports = {
    port: process.env.PORT || 3001,
    db: "mongodb+srv://santidelhierro98:pepe@domadb-u7mke.mongodb.net/test?retryWrites=true&w=majority",
    SECRET_TOKEN: 'miclavedetokens'
}   