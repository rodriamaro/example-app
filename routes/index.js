const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Hola a todos!' });
});

router.post('/', (req, res, next) => {
  res.status(201).send();
});

module.exports = router;
