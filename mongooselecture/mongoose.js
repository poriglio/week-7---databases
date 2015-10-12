// This is not an express app. This is just a JS file. So, run it with node.

// REQUIRE MONGOOSE NODE MODULE

var mongoose = require("mongoose");

// CONNECT TO LOCAL DATABASE
// in shell, we do this with the "use" command
// with mongoose, we use mongoose's connect method
// Below, we are connecting locally:

mongoose.connect("mongodb://localhost/candyDB")

// Connect is the equivalnent to using "use" in CLI
// Now application is always connected to the database!

// Below, we will call the Schema method, which takes an object for an argument. It is a constructor, but it does not use the "new" keyword
// The data types must be capitalized.
// This is because they are also type constructors built into JS

var candySchema = mongoose.Schema({
	name          : {
						type     : String,
						required : true
					},
	highFructose  : {type: Boolean, default: true},
	nuts          : Boolean,
	calories      : Number,
	sweetness     : Number,
	bestFriend    : String,
	email         : String
})

// Now mongoose knows what a candy should look like, and it will do internal processing to ensure that the wrong data type doesn't get inserted.

// If you want ANY data type to apply to a key, pass in an empty object. {}

// Saying "String" is really just short for passing in {type: String}

// Now we tell mongoose to model this collection:
var Candy = mongoose.model("Candy",candySchema)
// The first arg is the collection name.
// (However, Mongoose will name the collection in the mongo shell as a plural)
// The second arg is how it should look.

// // Below, we are saying, let's make a new document that matches the schema.
// var gummiCode = new Candy({
// 	name       : "Gummi Code",
// 	nuts       : false,
// 	calories   : 500,
// 	sweetness  : 6,
// 	bestFriend : "gummi randoms",
// 	email      : "minplynn@aol.com"
// })

// var scoobySnacks = new Candy({
// 	name       : "Scooby Snacks",
// 	nuts       : true,
// 	calories   : 7000,
// 	sweetness  : 8,
// 	bestFriend : "Shaggy",
// 	email      : "pacificstar12@hotmail.com"
// })

// // Now we must call a method on the document we just created in order to save it to the database.
//  // Save takes a callback function. Pretty much every callback function in mongoose takes two arguments, first: error, second: data(the data returned from the method you call).
//  gummiCode.save(function(error,data){
//  	console.log("ERROR : ", error)
//  	console.log("DATA : ", data)
//  	// If we were in a route handler...
//  	// if(error){
//  	// 	res.send("A candy with that name already exists.")
//  	// }
//  	// else{
//  	// 	res.send(data)
//  	// }
//  })

// SECOND PART OF LECTURE BEGINS HERE.
// The first part is commented out above.

// Finding something in a collection:
// Many of the methods in mongoose mimic the ones you would use in shell.
// Sometimes they take slightly different arguments.
var allMyCandy = []

Candy.find({calories: {$gt:500}},function(error, data){
	console.log("Candy...", candies)
	allMyCandy = data
})

console.log("--------------", allMyCandy)
// Find takes two args.
// 1. query (what you're looking for. Could be an empty object to find EVERYTHING in the collection)
// 2. callback function

// All callbacks passed in mongoose methods are asynchronous. Thus, the console log of the hyphens may show up FIRST, just because the other information is still processing as Mongoose finds the candy you're looking for. Thus, you can't rely on "allMyCandy" having the expected value OUTSIDE of that callback function. Everything relying on that callback function needs to live inside of the callback function.

