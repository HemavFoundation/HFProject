const { json } = require('body-parser');
const fs = require('fs');
const hex = require('hex-encode-decode');
const config = require('../config')
const socketService = require('../index')


function recieveLocation(req, res) {
  /*
  The body of the JSON recived is:
  {
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

  rawdata = fs.readFileSync(__dirname + '/rockblock.json');
  data = JSON.parse(rawdata)

  jsondata = JSON.parse(hex.decode(data.data))
  console.log(jsondata)



}

module.exports = {
  recieveLocation
};
