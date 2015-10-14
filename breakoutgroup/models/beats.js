var mongoose = require("mongoose")

var beatSchema = mongoose.Schema({
	tempo           : {type: Number},
	dopeness		: {type: Boolean},
	distanceToDrop	: {type: Number},
	bestFriend		: {type: String},
	favoriteSandwich: {type: String}
}) 

// Mongoose.model() is the entry point to the collection
module.exports = mongoose.model('Beat', beatSchema)