// We store what our model is exporting here: (it is like saying module.imports)

var Hero = require("../models/heromodel.js")

// Define our route handlers:

// Creating a hero:
var createHero = function ( request, response){
	// Data from a post request lives in req.body!
	// Req.body matches our schema... it has the same property names, so we can just pass it in.
	// Otherwise,we'd have to do something like: request.body.propertyname
	var newHero = new Hero({
		name		: request.body.name,
		powers		: request.body.powers.split(", "),
		HQ			: request.body.HQ,
		alignment	: request.body.alignment,
		powerLevel	: +request.body.powerLevel,
		sidekick	: request.body.sidekick,
		weaknesses	: request.body.weaknesses.split(", "),
		costume     : request.body.costume,
		archNemesis : request.body.archNemesis === "true" ? true : false,
	})

	newHero.save(function(error,doc){
		if(!error){
			response.send(doc)
		}
		else{
			console.log("Error!!!!",error)
		}
	})

}

var getHeroes = function(request,response){
	Hero.find({},function(err,docs){
		response.send(docs)
	})
}

module.exports = {
	createHero : createHero,
	getHeroes  : getHeroes,
}