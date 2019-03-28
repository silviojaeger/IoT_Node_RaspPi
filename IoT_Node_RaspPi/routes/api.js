var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var path = require('path');
var wol = require('node-wol');
var pfio = require("piface");

var camPath =  path.join(__dirname, '../', 'public/cam/cam.jpg');
pfio.init();

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

//get light information
router.get('/lightInfo', function(req, res, next) {
  fetch('http://192.168.1.4/report').then(function(response) {
    response.text().then(function (text) {
      res.send(text);
    });
  })
});

//Get status of PC (boolean)
router.get('/pcUp', function(req, res, next) {
  console.log(pcUp);
  res.send(pcUp);
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

//---------Piface------------------------------------------------------------
router.get('/faceOn', function(req, res, next) {
  
  pfio.digital_write(0, 1);
  pfio.digital_write(1, 1);
  pfio.digital_write(2, 1);
  pfio.digital_write(3, 1);
  pfio.digital_write(0, 0);
  pfio.digital_write(1, 0);
  pfio.digital_write(2, 0);
  pfio.digital_write(3, 0);
  res.send("Did it work dude?");
});

router.get('/faceOff', function(req, res, next) {
  
  pfio.digital_write(0, 0);
  pfio.digital_write(1, 0);
  pfio.digital_write(2, 0);
  pfio.digital_write(3, 0);
  res.send("All off?");
});

module.exports = router;
