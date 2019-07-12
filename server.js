var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
var app = express();

app.use(compression());

app.set('port', (process.env.PORT || 8082));

app.use('/', express.static(__dirname + '/dist'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

  // all other routes are handled by Angular
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Angular 2 Full Stack listening on port '+app.get('port'));
});

module.exports = app;
