angular.module("heroesApp",[])

angular.module("heroesApp").controller("heroesController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Welcome to AJAX Heroes!!!"

	// Below, we send a request to the server, and get a response from the server.

	$scope.createHero = function() {
		$http.post("/api/heroes",$scope.newHero).then(function(returnData){
			console.log("Made a hero!",returnData)
		})
	}

}])