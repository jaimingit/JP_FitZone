const express = require('express');
const plans = require('../data/plans');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(plans);
});

router.get('/:id', (req, res) => {
  const plan = plans.find(p => p.id === req.params.id);
  if (!plan) {
    return res.status(404).json({ message: 'Plan not found' });
  }
  res.json(plan);
});

module.exports = router;
