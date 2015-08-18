var express = require('express');
var router = express.Router();
var debug = require('debug')('monacra:server');

// mongoose config
require('../database');

var mongoose = require('mongoose');
var Report = mongoose.model('reports');

router.get('/', function(req, res, next){
	Report.find({
	})
	.limit(30)
	.select({
		_id: true,
		DEVICE_ID: true,
		APP_VERSION_NAME: true,
		PHONE_MODEL: true, 
		INSERTED: true,
		REPORT_ID: true,
		SOLVED: true
	})
	.exec(function(err, reports){
		if(err) return next(err);

		res.render('view_reports', {reports: reports});
	});
	
});

router.post('/create', function(req, res, next) {
  var body = req.body;

  debug("data posted!");
  debug(body);

  body["INSERTED"] = new Date();
  body["SOLVED"] = false;
  
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

router.get('/view/:uid', function(req, res, next){
	Report.findOne({
		_id: req.params.uid
	})
	.select({
		_id: true,
		REPORT_ID: true,	
		APP_VERSION_CODE: true,	
		PACKAGE_NAME: true,	
		ANDROID_VERSION: true,	
		BRAND: true,	
		SHARED_PREFERENCES: true,	
		USER_APP_START_DATE: true,	
		APP_VERSION_NAME: true,	
		LOGCAT: true,	
		INSTALLATION_ID: true,	
		PRODUCT: true,	
		DEVICE_ID: true,	
		PHONE_MODEL: true,	
		STACK_TRACE: true,	
		USER_COMMENT: true,
		INSERTED: true,
		SOLVED: true,
		humanId: true
	})
	.exec(function(err, report){
		if(err) return next(err);

		var kv = {};
		Report.schema.eachPath(function(path) {
		    kv[path] = report[path];
		});
		res.render('view_report', {report: kv});
	});
});

module.exports = router;