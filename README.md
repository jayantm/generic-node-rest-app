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


[Best-Practices-for-Nodejs]:http://www.quora.com/What-are-the-best-practices-for-node-js
[BoilerPlateCode]:https://github.com/mape/node-express-boilerplate
[CI/CD]:http://code.tutsplus.com/tutorials/setting-up-continuous-integration-continuous-deployment-with-jenkins--cms-21511
[Testing & Code Coverage]:http://www.gregjopa.com/2014/02/testing-and-code-coverage-with-node-js-apps/