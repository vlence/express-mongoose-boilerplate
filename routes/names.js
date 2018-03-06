const express = require('express');
const Names = require('../models/Names');

const router = express.Router();

router.get('/', function(request, response) {

  // Returns an array, always
  Names.find().lean().exec()
    .then(function(names) {
      // response.setHeader('Content-Type', 'application/json');
      // response.end(JSON.stringify(names));
      response.json(names);
    })
    .catch(function(err) {
      response.status(500).json(err)
    });

});

router.get('/:id', function(request, response) {
  const id = request.params.id;
  
  // Returns one or no documents
  Names.findOne({ _id: id }).lean().exec()
    .then(function(name) {
      response.json(name);
    })
    .catch(function(err) {
      response.status(500).json(name);
    })
});

router.post('/', function(request, response) {
  const name = request.body.name;

  Names.create({ name: name })
    .then(function(name) {
      response.json(name);
    })
    .catch(function(err) {
      response.status(500).json(err);
    })
});

router.put('/:id', function(request, response) {
  const id = request.params.id;
  const name = request.body.name;

  Names.findOneAndUpdate({ _id: id }, { name: name }, { new: true }).exec()
    .then(function(newName) {
      response.json(newName);
    })
    .catch(function(err) {
      response.status(500).json(err)
    })
});

router.delete('/:id', function(request, response) {
  const id = request.params.id;

  Names.findOneAndRemove({ _id: id }).exec()
    .then(function() {
      response.end();
    })
    .catch(function(err) {
      response.status(500).json(err);
    })
});

module.exports = router;