var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Hola a todos!' });
});

router.post('/', function(req, res, next) {
  res.status(201).send();
});

router.put('/', function(req, res, next) {
  res.status(201).send();
});

module.exports = router;
