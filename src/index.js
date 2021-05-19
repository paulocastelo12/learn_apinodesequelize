const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

console.log("Calling app.listen().");

var server = app.listen(3000, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

console.log("app.listen() executed.");
