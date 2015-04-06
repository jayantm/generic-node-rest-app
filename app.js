var express = require('express');
var bodyParser = require("body-parser");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('./lib/logger.js');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'passwd'
    },
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

var app = express();

/* Setting View Engine */
app.set('view engine', 'ejs');
//app.set('view engine', 'jade');

/* Setting Session */
//app.use(express.cookieParser());
//app.use(express.session({ secret: "mysalt" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/*+json' }));
//app.use(bodyParser.text({ type: 'text/plain' }));
//app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

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