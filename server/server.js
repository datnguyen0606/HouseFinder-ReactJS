var express = require("express");
var path = require("path");
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

app.post('/api', function (req, res) {
  //uri = "http://api.zoopla.co.uk/api/v1/property_listings.json?api_key=xhr7bshctkhk9hdqwemqstvk&radius=0.25&area=se6+4ts&listing_status=rent&ordering=ascending";
  console.log("here====");
  var uri = req.body.uri;
  request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  });
});

app.listen(3000, function() {
  console.log("Started listening on port", 3000);
});

