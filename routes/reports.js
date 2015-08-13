var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET!');
});

router.post('/create', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;