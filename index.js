'use strict'

const mongoose = require('mongoose')
const app = require('./server/app')
const config = require ('./server/config')

mongoose.connect(config.db,{
    useNewUrlParser: true,
  })

app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
}) 