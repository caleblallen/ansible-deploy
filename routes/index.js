var express = require('express');
var router = express.Router();
var os = require('os');
var config = require('config');

/* GET home page. */
router.get('/', function (req, res, next) {
  const hostname = os.hostname();
  res.render('index', {title: 'Ansible Deployment Test App', hostname: hostname, secret: config.get('secret')});
});

module.exports = router;
