var request = require('supertest');
var should = require('should');
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

describe('GET /hello.json', function() {
    it('respond with Hello World JSON', function(done) {
        request(app)
            .get('/hello.json')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '17')
            .expect(200)
            .expect({"hello":"world"}, done);
    });
});

describe('GET /user/1', function() {
    it('respond with User Detail (Simple)', function(done) {
        request(app)
            .get('/user/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('Content-Length', '73')
            .expect({"id":1,"name":"jayant","country":"india","language":["english","hindi"]})
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});

//http://shouldjs.github.io/
describe('GET /user/1', function() {
    it('respond with User Detail (BDD)', function(done) {
        request(app)
            .get('/user/1')
            .end(function(err,res) {
                should.not.exist(err);
                should.exist(res);
                res.statusCode.should.equal(200);
                res.should.be.json;
                var user = res.body;
                user.should.be.an.instanceOf(Object).and.have.property('name');//.which.is.equal('jayant'); //<<-- Check Value
                user.should.have.property('language').which.is.an.instanceof(Array);//.and.have.lengthOf(2); //<<-- Check Value
                user.should.have.property('id').which.is.a.Number;//.and.is.equal(1); //<<-- Check Value
                user.should.have.property('country').which.is.a.string;//.and.is.equal('india'); //<<-- Check Value
                done();
            });
    });
});