# generic-node-rest-app
RESTful API service using NodeJS

* npm install
* To run app server
```sh
$ node app.js
```
OR
```sh
$ npm start
```
* Add exec permission to test script
```sh
$ chmod +x script/test.sh
```
* To run test from root
```sh
$ ./script/test.sh
```
OR
```sh
$ npm test
```

## To exec app server in continuous mode
* Using `forever` to start (Install `forever` as global module)
```sh
$ sudo npm install -g forever
$ forever start app.js
```
* Using `forever` to stop
```sh
$ forever stopall
```