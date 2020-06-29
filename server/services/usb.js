'use strict'

const SerialPort =  require("serialport")
const portName = process.argv[2]

var myPort = new SerialPort(portName,{
    baudrate:9600,
    parser:serialport.parsers.Readline("\r\n"),

})

myPort.on('open',onOpen)
myPort.on('data',onData)

function onOpen(){
    console.log("Open connection")
}

function onData(data){
    console.log(data.toString())
} 