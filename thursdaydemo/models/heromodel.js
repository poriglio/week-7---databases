var mongoose = require("mongoose")

var heroSchema = mongoose.Schema({
	name		: {type: String},
	powers		: {type: Array},
	HQ			: {type: String},
	alignment	: {type: String},
	powerLevel	: {type: Number},
	sidekick	: {type: String},
	weaknesses	: {type: Array},
	costume     : {type: String},
	archNemesis : {type: Boolean},
})


// Here, we pass in the name of our collection (which will be pluralized) and the heroSchema.
module.exports = mongoose.model("Hero", heroSchema)