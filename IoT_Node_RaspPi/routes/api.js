var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

//turn ON light
router.get('/on', function(req, res, next) {
  let url = 'http://192.168.1.4//relay?state=1';
  fetch(url).then(res.send('turned ON'));
});

//turn OFF light
router.get('/off', function(req, res, next) {
  let url = 'http://192.168.1.4//relay?state=0';
  fetch(url).then(res.send('turned OFF'));
});

module.exports = router;
