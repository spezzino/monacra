var express = require('express');
var router = express.Router();
var debug = require('debug')('monacra:server');

// mongoose config
require('../database');

var mongoose = require('mongoose');
var Report = mongoose.model('reports');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendStatus(405);
});

router.post('/create', function(req, res, next) {
  var body = req.body;

  debug("data posted!");
  debug(body);
  
  new Report(body).save(function(err, report){
  	debug("Trying to insert data...");
  	debug(err);
  	debug(report);
  	if(!err){
  		debug("data inserted!");
  		res.sendStatus(200);
  	}else{
  		debug("Oh no, an error has occurred");
  		res.sendStatus(500);
  	}
  });
});

module.exports = router;