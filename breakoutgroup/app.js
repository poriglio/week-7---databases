
var express = require("express")
var bodyParser = require("body-parser")

var session = require("express-session")


var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/breakinDB")

var beatsCtrl = require("./controllers/beatController.js")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
// What can go in here? 
// Secret (a way of uniquely identifying the site)
// SaveUninitialized true saves an empty cookie whenever someone visits the site, regardless of whether info is entered

app.use(session({
	secret : "I don't git usually",
	resave : true,
	saveUninitialized : false

	// cookie : { maxAge : 600000 }
}))

app.get("/",function(req,res){
	res.sendFile("html/home.html",{root:"./public"})
})

app.get("/whoami",function(req,res){
	// In express, we have req.seesion property, which contains info about a users session. 
	console.log("Session: ", req.session)
	// If the info in req.session contains no info, we want to prompt the user to enter info/
	res.send(req.session)
})

app.post("/iamwho",function(req,res){
	// req.body contains info sent FROM client
	// Below, we add a username property to our session object:
	req.session.username = req.body.username
	res.send(req.session)
})

// BEAT ROUTES
// api denotes that they only deal with data
// they aren't ones you'll see on live sites

// When we post to this, we are calling the createBeat function that lives in our controller.
app.post("/api/beats", beatsCtrl.createBeat)
app.get("/api/beats/:id",beatsCtrl.findBeats)

app.get("/beats/:id",function(req,res){
	res.sendFile("html/pictures.html",{root:"./public"})
})

var port = 3000

app.listen(port,function(){
	"Server listening on port " + port
})