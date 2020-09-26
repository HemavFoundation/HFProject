const { json } = require('body-parser');
const fs = require('fs');
const hex = require('hex-encode-decode');
const config = require('../config')
const socketService = require('../index')
const Location = require('../models/location')
const { db } = require('../models/drone')

function recieveLocation(req, res) {
  /*
  The body of the JSON recived is:
  {
      "drone_id": "HP2-087",
      "lat": 41.2752192,
      "lon": 1.9858253,
      "alt:": 0.733,
      "heading": 21,
      "typ": 1,  # type of the message for decoding
      "status": 01 #status insde of the type of message for the correct decoding
  }
  */

  // rawdata = fs.readFileSync(__dirname + '/rockblock.json');
  rawdata = req.body
  console.log("rawdata:",req.body)
  console.log("data",data)

  jsondata = JSON.parse(hex.decode(rawdata.data))

  time = data.transmit_time
  id_plate = jsondata.drone_id
  lat = jsondata.lat
  lon = jsondata.lon
  alt = jsondata.alt
  heading = jsondata.heading

  let location = {
    id_plate: id_plate,
    time: time,
    lat: lat,
    lon: lon,
    alt: alt,
    heading: heading
  }
  db.collection('Location').insertOne(
    {
      "Location": location
    },
    { upsert: true }
  )

}

function saveLocation(req, res) {
  const location = new Location(
    {
      id_plate: req.body.id_plate,
      time: req.body.time,
      lat: req.body.lat,
      lon: req.body.lon,
      alt: req.body.alt,
      heading: req.body.heading

    }
  )
  location.save((err) => {
    if (err) res.status(500).send({ message: `Error al salvar en la base de datos: ${err}` })

    return res.status(200).send({ message: "Localizacion guardada correctamente en la bd", status: 'ok' })
  })

  console.log(location)






}

const getFlightsLocations = (req, res) => {
  res.send([{
      lat: 41,
      log: 2,
      time: '2020_12_30',

  }])
}

module.exports = {
  recieveLocation,
  getFlightsLocations
};
