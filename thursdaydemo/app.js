// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/heroes-of-ajax")

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
// var costumeController = require('./controllers/indexController')
var heroController = require("./controllers/herocontroller.js")

app.get('/', function(req, res){
  res.sendFile('./public/html/index.html',{root:"./"})
});

// Hero Routes
app.post("/api/heroes", heroController.createHero)

app.get("/api/heroes",heroController.getHeroes)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});