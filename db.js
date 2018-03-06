// Make data/db
// npm run mongod

const mongoose = require('mongoose');

// https://docs.mongodb.com/manual/reference/connection-string/
const url = 'mongodb://localhos:27017/test';

mongoose.connect(url)
  .then(() => {
    // Successfully connected

    console.log('Successfully connected');

    mongoose.disconnect();
  })
  .catch(() => {
    // Failed to connect

    console.error('Failed to connect');
  })