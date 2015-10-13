var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// DIRNAME MUST HAVE TWO UNDERSCORES BEFORE IT
app.use(express.static(__dirname));

app.get("/", function(request,response){
	response.sendFile("/index.html", {root:"./public"})
})

app.post("/form-submit",function(request,response){
	console.log(request.body)
	response.send("task received!")
})

var port = 3000

app.listen(port,function(){
	console.log("Server running on port " + port + "...")
})


