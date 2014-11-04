var express = require('express');
var i18n = require('i18n');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: i18n.__("home") });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: i18n.__("about") });
});

/* GET contacts page. */
router.get('/contacts', function(req, res) {
  res.render('contacts', { title: i18n.__("contact") });
});

module.exports = router;
