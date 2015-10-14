var Beat = require("../models/beats.js")

// Express assumes you are requiring a js file, so you could just leave off the js if you like.

// DEFINTE OUR ROUTE HANDLERS DEALING WITH BEATS HERE!
// What do we want to do with them?

// Create - new beats
// if req.body doesn't match the schema, we need to make a new object and set the correct property/values

var createBeat = function(req,res){
	// req.body : data coming from client
	var beat = new Beat(req.body)
	beat.save(function(error,doc){
		res.send(doc)
	})
}


// Read - finding beats
var findBeats = function(req,res){
	Beat.find({},function(err,beats){
		res.send(beats)
	})
}
// Update - editing beats
// Delete - dropping (deleting) beats


// Below, we will export all the different methods we create...
module.exports = {
	createBeat : createBeat,
	findBeats  : findBeats,
}