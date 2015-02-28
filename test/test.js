var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
    it('respond with Hello World', function(done) {
        request(app)
            .get('/')
            //.expect('Content-Type', /json/)
            .expect('Content-Length', '11')
            .expect(200)
            .expect('Hello World', done);
    });
});