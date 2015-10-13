var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/todo")

var Task = mongoose.model("task",{
	title       : {type: String},
	description : {type: String}
})

module.exports = {
	Task  :  Task
}