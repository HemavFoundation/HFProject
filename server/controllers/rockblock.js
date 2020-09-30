const fs = require('fs');
const hex = require('hex-encode-decode');
const Location = require('../models/location')
const { db } = require('../models/drone');
const { type } = require('os');

function data_interpreter(string) {
  ljhewfvneñwfvevev
  let obj = {
    id_plate: string,
    type: 1

  }
  return obj
}

const rawdata = req.body

const JSON = data_interpreter(hex.decode(rawdata.data))



function recieveMessage(req, res) {
  /*
  The body of the JSON recived is:
  {
    "drone_id": "HP2-087",
    "status": 0, #status for the correct decoding (landing/flight)
    "lat": 41.2752192,
    "lon": 1.9858253,
    "alt:": 0.733,
    "heading": 21,
    "mission": periscope,  # type of flight
  }
  */

  const rawdata = req.body

  const jsondata = data_interpreter(hex.decode(rawdata.data))

  const time = rawdata.transmit_time
  const id_plate = jsondata.drone_id
  const status = jsondata.type
  const lat = jsondata.lat
  const lon = jsondata.lon
  const alt = jsondata.alt
  const heading = jsondata.heading
  const mission = jsondata.mission
  
}

const getFlightsLocations = (req, res) => {
  db.collection('Location').distinct('id_plate').then((idPlates = []) => {
    const promises = idPlates.map(idPlate => db.collection('Location')
      .find({ id_plate: { $eq: idPlate } })
      .sort({ _id: -1 })
      .limit(1)
      .toArray()
      .then((droneLocation = []) => droneLocation.length && droneLocation[0])
    )

    Promise.all(promises)
      .then(allLocations => {
        res.send(allLocations.filter(Boolean))
      }).catch(error => {
        res.status(500).send({ ok: false, error })
      })
  })
}

module.exports = {
  recieveMessage,
  getFlightsLocations
};
