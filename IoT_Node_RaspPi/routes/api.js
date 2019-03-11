var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var path = require('path');
var wol = require('node-wol');

var camPath =  path.join(__dirname, '../', 'public/cam/cam.jpg');

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

//Get the camera picture
router.get('/cam', function(req, res, next) {
  res.sendFile(camPath)
});

//Wake up PC
router.get('/wakepc', function(req, res, next) {
    wol.wake('38:D5:47:78:C5:D7', function(error) {
    if(error) {
      // handle error
      console.log(error);
      return;
    }
  });
  res.send('waked up')
});

module.exports = router;
