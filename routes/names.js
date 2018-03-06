const express = require('express');

const router = express.Router();
const names = [];

router.get('/', function(request, response) {
  response.setHeader('Content-Type', 'routerlication/json');
  response.end(JSON.stringify(names));
});

router.get('/:id', function(request, response) {
  const id = parseInt(request.params.id, 10);
  
  response.setHeader('Content-Type', 'routerlication/json');
  response.end(JSON.stringify(names[id]));
});

router.post('/', function(request, response) {
  names.push(request.body.name);

  const pushedIndex = names.length-1;
  response.setHeader('Content-Type', 'routerlication/json');
  response.end(JSON.stringify({ id: pushedIndex }));
});

router.put('/:id', function(request, response) {
  const id = request.params.id;
  const name = request.body.name;

  names[id] = name;

  response.setHeader('Content-Type', 'routerlication/json');
  response.end(JSON.stringify({ id: id, name: name }));
});

router.delete('/:id', function(request, response) {
  const id = request.params.id;

  delete names[id];

  response.end();
});

module.exports = router;