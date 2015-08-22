var express = require('express');
var app = express();
bodyParser  = require("body-parser"),

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/values', 
	function(req, res)
	{
		console.log(req.body.NumberA);
		console.log(req.body.NumberB);
		console.log('iiii');
		res.send(req.body.NumberA);
	}
);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});