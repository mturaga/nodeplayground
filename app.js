var express = require('express');
var app = express();

var port = process.env.ENV || 3000;

app.listen(port, function (err) {
    console.log('Running at port ' + port);
});

