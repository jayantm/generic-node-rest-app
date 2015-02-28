var express = require('express');

var logger = require('./lib/logger.js');

var app = express();

app.use('/api/v1',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers")); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

var routes = require('./routes.js');
app.use('/api/v1', routes);
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
logger.info("Server Started @ 5000");
logger.debug("use http://localhost:5000/");