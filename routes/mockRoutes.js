// routes/mockRoutes.js
const express = require('express');
const router = express.Router();
const exampleData = require('../data/example.json');
const exampleData2 = require('../data/Courriers.json');
const exampleData3 = require('../data/output.json');

router.get('/mock', (req, res) => {
  res.json({
    status: 'OK',
    message: 'GET mock successful',
    data: exampleData2
  });
});

router.post('/mock', (req, res) => {
  res.json({
    status: 'CREATED',
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

router.get('/mock/:id', (req, res) => {
  res.json({
    status: 'OK',
    message: `Fetched record with ID: ${req.params.id}`,
    data: exampleData3
  });
});

module.exports = router;
