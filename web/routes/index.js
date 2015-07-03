var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Using AngularJS Directives and Data Binding' });
});

router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Using AngularJS Directives and Data Binding' });
});

router.get('/controller', function(req, res, next) {
  res.render('controller', { title: 'Using AngularJS Directives and Data Binding' });
});

router.get('/bootstrap', function(req, res, next) {
  res.render('bootstrap');
});

module.exports = router;
