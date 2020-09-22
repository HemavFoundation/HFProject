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

  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
}

module.exports = {
  recieveLocation
};
