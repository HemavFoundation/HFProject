'use strict'
const fs = require('fs')
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const http = require('http')
const https = require('https')
var privateKey  = fs.readFileSync('./server.key');
var certificate = fs.readFileSync('./server.cert');
const credentials = {key: privateKey, cert: certificate};

const SocketIO = require('socket.io')

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
    .then(() => {
        console.log('Conexión a la base de datos establecida...')
    }
    )
//despues de conectarse a la base de datos queremos que se conecte a la API

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3001);
