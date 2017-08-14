'use strict';
var express = require('express');
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var documentController = require('./controllers/wordFilesCtrl');
var dbActionsCtrl = require('./controllers/dbActionsCtrl');
var port = (process.env.PORT || 8080);
var router = express.Router();



app.use(bodyParser.urlencoded({ extended: true}));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(express.static('./'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('content-type: application/json; charset=utf-8');
  res.header("access-control-allow-origin: *");
  next();
});
app.get('/getF-01/:matricula', documentController.generateF01);
app.get('/getF-02/:matricula', documentController.generateF02);
app.post('/getF-03/', documentController.generateF03);
app.post('/getF-04/', documentController.generateF04);
app.post('/login', dbActionsCtrl.login);
app.get('/getTeachersData/:carreer', dbActionsCtrl.getTeachersData);
app.get('/getF-05/:matricula', documentController.generateF05);



/*
app.post('/createPlant', plantCtrl.createPlant);
app.get('/search/:plant', plantCtrl.searchPlant);
app.get('/search/', plantCtrl.searchAllPlants);*/


app.listen(port, function() {
   console.log("Node server running on http://localhost:"+port);
});
