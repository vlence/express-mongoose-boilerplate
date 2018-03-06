const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const namesRoute = require('./routes/names');
const app = express();

const names = [];

// Use this to serve static content
// app.use(express.static('public'));

// Parse json
app.use(bodyParser.json());

app.use('/names', namesRoute);

app.listen(3000, 'localhost', function(err) {
  if (!err) {
    console.log('Server running on localhost:3000')
  }
})