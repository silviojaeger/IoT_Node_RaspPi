var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ping = require('ping');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
//----Check if PC is up-------------------------------------------------
pcUp = false; //Global Variable

function checkPCRunning(){
    host = '192.168.1.10';
        ping.sys.probe(host, function(isAlive){
            pcUp= isAlive;
        })
}


setInterval(function(){
    checkPCRunning();
}, 3000);
//----------------------------------------------------------------------
 
module.exports = app;
