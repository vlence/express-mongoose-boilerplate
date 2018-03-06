const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const namesRoute = require('./routes/names');
const app = express();

const url = 'mongodb://localhost:27017/test';

// Use this to serve static content
// app.use(express.static('public'));

mongoose.connect(url)
  .then(function() {
    // Parse json
    app.use(bodyParser.json());

    app.use('/names', namesRoute);

    app.listen(3000, 'localhost', function(err) {
      if (!err) {
        console.log('Server running on localhost:3000')
      }
    });
  })

  .catch(function() {
    console.error('Kaboom!')
    process.exit();
  })
