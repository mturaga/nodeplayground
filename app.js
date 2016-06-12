var express = require('express');
var app = express();

var port = process.env.ENV || 3000;

 app.use(express.static('public'));
 app.use(express.static("src/views"));

app.get("/books", function(req, res) {
    res.send('Hello Books!!!');
})

app.listen(port, function (err) {
    console.log('Running at port ' + port);
});



