var app = angular.module("formApp",[])

app.controller("formController",["$scope","$http",function($scope,$http){

	$scope.task = {
		title       : "",
		description : "",
	}

	$scope.tasks = []

	$scope.submitTask = function ( ) {
		$http({
			method    : "POST",
			url       : "/form-submit",
			data      : angular.copy($scope.task)
		}).then(function(returnData){
			console.log(returnData)},function(error){
				console.log(error)
			})
		$scope.task.title = ''
		$scope.task.description = ''
	}

	$scope.getTasks = function ( ) {
		$http({
			method      : "GET",
			url         : "/tasks"
		}).then(function(returnData){
			$scope.tasks = returnData.data
		},function(error){
			console.log("error!",error)
		})
	}

	setInterval($scope.getTasks,1000)
	// Now, every second, the app will call $scope.getTasks to get the tasks!

}])
	
// We need to specify five things to make our AJAX request in the submitTask function...
// 1. What kind of request are you sending? (get, post,etc)
// 2. Where are you sending the request? ("/" "/form-submit", etc)
// 3. What data are we sending with the request? Query string, request body, etc

// the first three have to do with sending a request. the next ones have to do with receiving a response...

// 4. What do you want to do if the request was successful? 
// 5. What's plan B if the request fails?
