var winston = require('winston');

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            name: 'debug-file',
            level: 'debug',
            filename: 'logs.log',
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 10,
            colorize: false
        }),
        new winston.transports.File({
            name: 'error-file',
            level: 'error',
            filename: 'error.log',
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 10,
            colorize: false
        }),
        new winston.transports.Console({
            name: 'console',
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = {
    info: function (message, err, req, resp, args) {
        logger.info(message);
    },
    warn: function(message, err, req, resp, args) {
        logger.warn(message);
    },
    error: function(message, err, req, resp, args) {
        logger.error(message);
    },
    debug: function(message, err, req, resp, args) {
        logger.debug(message);
    }
};