function recieveLocation(req, res) {
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
}

module.exports = {
  recieveLocation
};
