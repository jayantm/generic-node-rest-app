var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/hello.json', function (req, res) {
    res.send({hello: "world"});
});

app.get('/user/:id', function (req, res) {
    res.send({id:parseInt(req.params.id), name: 'jayant', country: 'india', language: ['english', 'hindi']});
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
console.log("Server Started @ 5000");
console.log("use http://localhost:5000/");