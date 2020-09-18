function recieveLocation(req, res) {
    /*
    The body of the JSON recived is:
    {
        'lat': lat,
        'lon': lon,
        'alt:': alt,
        'heading': heading,
        'typ': typ,  # type of the message for decoding
        'status': status #status insde of the type of message for the correct decoding
    }
    */
   
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
}

module.exports = {
  recieveLocation
};
