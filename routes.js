var express = require('express');
var api = express.Router();

api.get('/', function (req, res) {
    res.send('Hello World');
});

api.get('/hello.json', function (req, res) {
    res.send({hello: "world"});
});

api.get('/user/:id', function (req, res) {
    res.send({id:parseInt(req.params.id), name: 'jayant', country: 'india', language: ['english', 'hindi']});
});

module.exports = api;