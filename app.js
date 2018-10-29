const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');
const dummy = require('./lib/dummy');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('running');
});

app.post('/message', (req, res) => {
  const bodyText = JSON.stringify(req.body);
  dummy.echoText(bodyText);
  res.send('OK');
});

app.use(express.static('public'));
const server = http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
