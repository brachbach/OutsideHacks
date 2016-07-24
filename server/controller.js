const queries = require('./queries.js');
const analyzeLocations = require('./analyzeLocations.js');

exports.postLocation = (req, res) => {
  res.status(204).send();
  const time = new Date().getTime()
  const {lat, long} = req.body.coordinates;
  const params = {lat, long, time};
  queries.writeLocation(params);
}

exports.getAllData = (req, res, next) => {
  queries.readAllData((err, response) => {
    if (err) {
      console.error(err);
      next();
    } else {
      const allData = analyzeLocations(response);
      res.status(200).json(allData);
    }
  })
}