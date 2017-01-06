var express = require("express");
var path = require("path");
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

app.post('/api', function (req, res) {
  var uri = req.body.uri;
  request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(3000, function() {
  console.log("Started listening on port", 3000);
});

