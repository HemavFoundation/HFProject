'use strict'

const fs = require('fs')
const User = require('../models/user')


// el path debera ser el de la carpeta donde este la info en la raspi
// tambien debera guardarse la info en la bd para luego ser mostrada en el front

function updateInfoClick(req,res){
        fs.readFile('C:\\Users\\santi\\Desktop\\HFProject\\server\\services\\ejemploJSON.json',function(err,data){
        if (err) throw err
        const user = JSON.parse(data) 
        let usuario = new User()
        usuario.name = user.name;

        console.log(user)
        usuario.save((err, userfromjson)  => {
            if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
       
            res.status(200).send({user: userfromjson})
        })

    })

}

module.exports = {
    updateInfoClick
}

// const SerialPort =  require("serialport")
// const portName = process.argv[2]

// var myPort = new SerialPort(portName,{
//     baudrate:9600,
//     parser:serialport.parsers.Readline("\r\n"),

// })

// myPort.on('open',onOpen)
// myPort.on('data',onData)

// function onOpen(){
//     console.log("Open connection")
// }

// function onData(data){
//     console.log(data.toString())
// } 