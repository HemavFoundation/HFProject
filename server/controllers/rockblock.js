const fs = require('fs');
const hex = require('hex-encode-decode');
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
  
  const rawdata = req.body
  
  const jsondata = JSON.parse(hex.decode(rawdata.data))
  
  const time = rawdata.transmit_time
  const id_plate = jsondata.drone_id
  const lat = jsondata.lat
  const lon = jsondata.lon
  const alt = jsondata.alt
  const heading = jsondata.heading
  
  const location = {
    id_plate: id_plate,
    time: time,
    lat: lat,
    lon: lon,
    alt: alt,
    heading: heading
  }
  db.collection('Location').insertOne( 
    location,
    { upsert: true }
    ).then(() => {
      res.status(200).send({ ok: true })
    }).catch((error) => {
      res.send({ ok: false, error })
    })
    
  }
  
  const getFlightsLocations = (req, res) => {
    db.collection('Location').distinct('id_plate').then((idPlates= []) => {
      const promises = idPlates.map(idPlate => {
        return db.collection('Location')
        .find({ id_plate: { $eq: idPlate } })
        .sort({_id: -1})
        .limit(1)
        .toArray()
        .then((droneLocation = []) => {
          return droneLocation.length  && droneLocation[0]
        })
      })

      Promise.all(promises)
        .then(allLocations => {
          res.send(allLocations.filter(Boolean))
        }).catch(error => {
          res.status(500).send({ok: false, error})
        })
    })
  }
  
  module.exports = {
    recieveLocation,
    getFlightsLocations
  };
