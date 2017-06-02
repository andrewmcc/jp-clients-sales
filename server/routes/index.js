const express = require('express');
const clientData = require('../helpers/client-data');
const salesData = require('../helpers/sales-data');

const router = express.Router();

router.get(['/', '/clients'], (req, res, next) => {
  res.json(clientData.all());
});

router.get('/sales', (req, res, next) => {
  res.json(salesData.all());
});

router.get('/fault', (req, res, next) => {
  res.status(400).json({ error: 'Bad request' });
});

module.exports = router;
