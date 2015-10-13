var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models/model.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// DIRNAME MUST HAVE TWO UNDERSCORES BEFORE IT
app.use(express.static(__dirname));

app.get("/", function(request,response){
	response.sendFile("/index.html", {root:"./public"})
})

app.post("/form-submit",function(request,response){
	var newTask = new db.Task(request.body)
	newTask.save(function(){
		response.send("task received!")
	})
})

app.get("/tasks",function(request,response){
	console.log(request.body)
	db.Task.find({},function(error,data){
		if(error){
			console.log("error! error!")
		}
		else{
			response.send(data)
		}
	})
})

var port = 3000

app.listen(port,function(){
	console.log("Server running on port " + port + "...")
})


