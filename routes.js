var express = require('express');
var logger = require('./lib/logger.js');

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

/*Grouping*/
var posts = api.route('/posts/:id?');
posts.all(function(req, res, next) {
    logger.info("/posts filter");
    next();
})
.get(function (req, res) {
    logger.info("/posts " + (req.params.id?" detail":" all"));
    res.send(req.params);
});
/*posts.post('/', function (req, res) {
    logger.info("/posts create");
    res.send('Create Post');
});
posts.get('/', function (req, res) {
    logger.info("/posts all");
    res.send('All Posts');
});
posts.get('/:id', function (req, res) {
    logger.info("/posts details");
    res.send('Post Detail');
});
posts.delete('/:id', function (req, res) {
    logger.info("/posts delete");
    res.send('Post Delete');
});
//*/
/*
api.post('/authenticate', function(req, res) {
    if(req.body.email=="jayant@gmail.com" && req.body.password=="admin") {
        res.send({id:parseInt(req.params.id), name: 'jayant', country: 'india', language: ['english', 'hindi']});
    } else {
        res.status(401).send({error: "authenticate"});
    }
});
//*/
module.exports = api;