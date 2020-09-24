'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

require('./controllers/rockblock')


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
const server = app.listen(config.port, () => {
    console.log(`API REST corriendo en ${config.port}`)
})

var io = require('./socketio').initialize(server);




